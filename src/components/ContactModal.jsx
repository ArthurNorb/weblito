import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function ContactModal() {
    const [isOpen, setIsOpen] = useState(false);

    const contacts = [
        {
            name: 'E-mail',
            value: 'arthurnorberto4@gmail.com',
            link: 'mailto:arthurnorberto4@gmail.com',
            iconClass: 'fa-solid fa-envelope',
            color: 'hover:text-white'
        },
        {
            name: 'WhatsApp',
            value: '(31) 97154-0035',
            link: 'https://wa.me/5531971540035',
            iconClass: 'fa-brands fa-whatsapp',
            color: 'hover:text-green-500'
        },
        {
            name: 'LinkedIn',
            value: 'in/arthur-norberto',
            link: 'https://www.linkedin.com/in/arthur-norberto/',
            iconClass: 'fa-brands fa-linkedin',
            color: 'hover:text-blue-500'
        },
        {
            name: 'GitHub',
            value: 'ArthurNorb',
            link: 'https://github.com/ArthurNorb',
            iconClass: 'fa-brands fa-github',
            color: 'hover:text-gray-100'
        }
    ];

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="inline-block px-10 py-4 bg-indigo-600/10 text-indigo-400 border border-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white transition-all font-semibold text-lg hover:-translate-y-1 shadow-lg shadow-indigo-900/20"
            >
                Diga Olá
            </button>

            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">

                    <div
                        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
                        onClick={() => setIsOpen(false)}
                    ></div>

                    <div className="relative bg-slate-900 border border-slate-700 rounded-2xl p-8 max-w-md w-full shadow-2xl shadow-indigo-500/10 transform transition-all scale-100 animate-in fade-in zoom-in duration-200">

                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors p-1"
                        >
                            <X size={24} />
                        </button>

                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-slate-100 mb-2">Vamos conversar?</h3>
                            <p className="text-slate-400 text-sm">Escolha a melhor forma de falar comigo.</p>
                        </div>

                        <div className="space-y-3">
                            {contacts.map((contact) => (
                                <a
                                    key={contact.name}
                                    href={contact.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={`flex items-center p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800 transition-all group ${contact.color}`}
                                >
                                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-900 border border-slate-700 text-slate-300 group-hover:border-slate-500 group-hover:scale-110 transition-transform">
                                        <i className={`${contact.iconClass} text-lg`}></i>
                                    </div>
                                    <div className="ml-4 text-left">
                                        <p className="text-xs font-mono text-slate-500 uppercase tracking-wider">{contact.name}</p>
                                        <p className="text-sm font-medium text-slate-200 group-hover:text-white">{contact.value}</p>
                                    </div>
                                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0">
                                        <i className="fa-solid fa-arrow-right text-sm"></i>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}