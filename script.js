document.addEventListener("DOMContentLoaded", () => {
    // 1. Render Table
    const tbody = document.getElementById('tableBody');
    tbody.innerHTML = ''; 
    
    deewanData.forEach(row => {
        if (!row.id) return;
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="id-col">${row.id}</td>
            <td class="urdu-text col-BL">${row.BL}</td>
            <td class="urdu-text col-TO">${row.TO}</td>
            <td class="urdu-text col-SJ">${row.SJ}</td>
            <td class="urdu-text col-GM">${row.GM}</td>
        `;
        tbody.appendChild(tr);
    });

    // 2. Handle Column Toggling
    const checkboxes = document.querySelectorAll('.col-toggle');
    checkboxes.forEach(box => {
        box.addEventListener('change', function() {
            const columnClass = 'col-' + this.value;
            const elements = document.querySelectorAll('.' + columnClass);
            elements.forEach(el => {
                if (this.checked) el.classList.remove('hide-col');
                else el.classList.add('hide-col');
            });
        });
    });

    // 3. Dynamic Historical Context Panel (English Summaries)
    const witnessData = {
        'BL': '<strong>British Library (1799):</strong> Early authorial copy (97 ghazals). Preserves original Deccani features and the crucial Persian Dibacha.',
        'TO': '<strong>Telangana Archives (1811):</strong> Intermediate witness (98 ghazals). Confirms the stability of the early Deccani textual tradition.',
        'SJ': '<strong>Salar Jung (1818):</strong> The Base Text (Matn-e-Asas). Represents the poetess\'s final authorial intent (125 ghazals).',
        'GM': '<strong>Print Edition (1906):</strong> The Corrupted Tradition. Features unauthorized 20th-century linguistic modernization and ideological censorship.'
    };

    const infoBox = document.getElementById('witness-info');
    const labels = document.querySelectorAll('#witness-controls label');

    labels.forEach(label => {
        label.addEventListener('mouseenter', () => {
            const witnessId = label.getAttribute('data-witness');
            infoBox.innerHTML = witnessData[witnessId];
            
            // Stylize the box based on the witness type
            infoBox.style.background = witnessId === 'GM' ? '#fee2e2' : '#e0f2fe';
            infoBox.style.color = witnessId === 'GM' ? '#991b1b' : '#0369a1';
            infoBox.style.borderColor = witnessId === 'GM' ? '#fca5a5' : '#bae6fd';
        });

        label.addEventListener('mouseleave', () => {
            infoBox.innerHTML = '<em>Hover over a witness toggle above to view its historical context.</em>';
            infoBox.style.background = '#e2e8f0';
            infoBox.style.color = '#334155';
            infoBox.style.borderColor = '#cbd5e1';
        });
    });
});
