<?php
// Configurações básicas
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); // <--- ISSO É ESSENCIAL LOCALMENTE
header('Access-Control-Allow-Methods: GET, POST, OPTIONS'); // <--- Adicione OPTIONS
header('Access-Control-Allow-Headers: Content-Type');       // <--- Adicione Headers

// Tratamento para pre-flight request (CORS)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

$dbFile = 'brejo-db.json';

// Função para ler o banco
function getSupporters($file) {
    if (!file_exists($file)) {
        return [];
    }
    $json = file_get_contents($file);
    $data = json_decode($json, true);
    return isset($data['supporters']) ? $data['supporters'] : [];
}

// === ROTA GET (Ler dados) ===
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    echo json_encode(['supporters' => getSupporters($dbFile)]);
    exit;
}

// === ROTA POST (Salvar dados) ===
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Pega o JSON enviado pelo Astro
    $input = json_decode(file_get_contents('php://input'), true);
    $name = isset($input['name']) ? trim($input['name']) : '';

    if (empty($name)) {
        http_response_code(400);
        echo json_encode(['error' => 'Nome vazio']);
        exit;
    }

    $supporters = getSupporters($dbFile);
    
    // Adiciona no começo da lista
    array_unshift($supporters, substr($name, 0, 30));

    // Salva no arquivo
    $data = ['supporters' => $supporters];
    file_put_contents($dbFile, json_encode($data, JSON_PRETTY_PRINT));

    echo json_encode(['supporters' => $supporters]);
    exit;
}
?>