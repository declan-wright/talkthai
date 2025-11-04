import React from 'react';

interface MarkdownRendererProps {
    content: string;
    className?: string;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content, className }) => {
    const processInline = (text: string) => {
        return text
            .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold">$1<\/strong>');
    };

    // Normalize line endings and split into blocks
    const blocks = content.replace(/\r\n/g, '\n').split('\n\n').filter(b => b.trim() !== '');

    const html = blocks.map(block => {
        const trimmedBlock = block.trim();

        // Headings - subtle typography to match app
        if (trimmedBlock.startsWith('### ')) return `<h3 class="text-lg font-bold mb-2 mt-4">${processInline(trimmedBlock.substring(4))}<\/h3>`;
        if (trimmedBlock.startsWith('## ')) return `<h2 class="text-xl font-bold mb-3 mt-5">${processInline(trimmedBlock.substring(3))}<\/h2>`;
        if (trimmedBlock.startsWith('# ')) return `<h1 class="text-2xl font-bold mb-4 mt-6">${processInline(trimmedBlock.substring(2))}<\/h1>`;

        // Unordered List: handle '-', '*', or '•' bullets
        const listPattern = /^(\*|\-|•)\s/;
        if (listPattern.test(trimmedBlock) || trimmedBlock.split('\n').every(line => listPattern.test(line.trim()))) {
            const items = trimmedBlock.split('\n').map(item => {
                const content = item.trim().replace(listPattern, '');
                return `<li class="mb-1">${processInline(content)}<\/li>`;
            }).join('');
            return `<ul class="list-disc pl-6 space-y-1 mb-4">${items}<\/ul>`;
        }

        // Paragraphs: handle single newlines within a block as <br>
        return `<p class="mb-4 leading-relaxed">${processInline(trimmedBlock.replace(/\n/g, '<br\/>'))}<\/p>`;
    }).join('');

    return <div className={`text-left text-charcoal-ink ${className || ''}`.trim()} dangerouslySetInnerHTML={{ __html: html }} />;
};


