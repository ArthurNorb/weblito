// src/pages/api/vote.ts
import type { APIRoute } from 'astro';
import fs from 'node:fs/promises';
import path from 'node:path';

// Define o caminho do arquivo JSON na raiz do projeto
// process.cwd() pega o diretório atual de execução do Node
const dbPath = path.resolve(process.cwd(), 'brejo-db.json');

/**
 * Função auxiliar para ler o banco de dados.
 * Se der erro (arquivo não existe), retorna um array vazio.
 */
async function getSupporters() {
  try {
    const data = await fs.readFile(dbPath, 'utf-8');
    const json = JSON.parse(data);
    // Retorna a lista ou um array vazio se a chave não existir
    return Array.isArray(json.supporters) ? json.supporters : [];
  } catch (error) {
    // Se o arquivo não existir ou o JSON for inválido, começamos do zero
    return [];
  }
}

/**
 * ROTA GET:
 * Retorna a lista atual de nomes para o Frontend.
 */
export const GET: APIRoute = async () => {
  const supporters = await getSupporters();
  
  return new Response(JSON.stringify({ supporters }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

/**
 * ROTA POST:
 * Recebe um nome e adiciona na lista.
 */
export const POST: APIRoute = async ({ request }) => {
  try {
    // 1. Ler o corpo da requisição
    const body = await request.json();
    let name = body.name;

    // 2. Validação simples
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return new Response(JSON.stringify({ error: 'Nome inválido ou vazio' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Limpa o nome (remove espaços nas pontas e tags HTML básicas por segurança)
    name = name.trim().slice(0, 30); // Corta em 30 caracteres por segurança

    // 3. Ler dados atuais
    const supporters = await getSupporters();

    // 4. Adicionar novo nome no INÍCIO da lista (unshift)
    // Se quiser no final, use .push(name)
    supporters.unshift(name);

    // 5. Salvar no arquivo
    await fs.writeFile(dbPath, JSON.stringify({ supporters }, null, 2));

    // 6. Retornar a lista atualizada para o front já atualizar a tela
    return new Response(JSON.stringify({ supporters }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Erro na API:', error);
    return new Response(JSON.stringify({ error: 'Erro interno no servidor' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}