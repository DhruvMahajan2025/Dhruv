        const svg = document.getElementById('canvas');
        const clearBtn = document.getElementById('clear');
        let drawing = false;
        let currentLine;
        function getMousePosition(evt) {
            const rect = svg.getBoundingClientRect();
            return {
                x: evt.clientX - rect.left,
                y: evt.clientY - rect.top
            };
        }

        svg.addEventListener('mousedown', (e) => {
            drawing = true;
            const pos = getMousePosition(e);
            currentLine = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
            currentLine.setAttribute("points", `${pos.x},${pos.y}`);
            svg.appendChild(currentLine);
        });

        svg.addEventListener('mousemove', (e) => {
            if (!drawing) return;
            const pos = getMousePosition(e);
            const points = currentLine.getAttribute("points");
            currentLine.setAttribute("points", points + ` ${pos.x},${pos.y}`);
        });

        svg.addEventListener('mouseup', () => drawing = false);
        svg.addEventListener('mouseleave', () => drawing = false);

        clearBtn.addEventListener('click', () => {
            svg.innerHTML = '';
        });