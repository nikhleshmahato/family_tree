// script.js

// Function to fetch data from the JSON file and render the family tree
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const familyTreeElement = document.getElementById('family-tree');

        // Function to create the box (parent or child)
        const createBox = (name, image) => {
            const box = document.createElement('div');
            box.classList.add('box');
            box.innerHTML = `
                <img src="${image}" alt="${name}" class="image">
                <div class="name">${name}</div>
            `;
            return box;
        };

        // Create the first parent box
        const parentDiv = document.createElement('div');
        parentDiv.classList.add('parent');
        parentDiv.appendChild(createBox(data.parents[0].name, data.parents[0].image));
        parentDiv.appendChild(createBox(data.parents[1].name, data.parents[1].image));

        // Add the parent div to the family tree
        familyTreeElement.appendChild(parentDiv);

        // Add the line between parents and children
        const lineDiv = document.createElement('div');
        lineDiv.classList.add('line');
        familyTreeElement.appendChild(lineDiv);

        // Create the new parent box
        const newParentDiv = document.createElement('div');
        newParentDiv.classList.add('parent');
        newParentDiv.appendChild(createBox(data.newParents[0].name, data.newParents[0].image));
        newParentDiv.appendChild(createBox(data.newParents[1].name, data.newParents[1].image));

        // Add the new parent div to the family tree
        familyTreeElement.appendChild(newParentDiv);

        // Create the child boxes
        const childDiv = document.createElement('div');
        childDiv.classList.add('child');
        childDiv.appendChild(createBox(data.children[0].name, data.children[0].image));
        childDiv.appendChild(createBox(data.children[1].name, data.children[1].image));

        // Add the child div to the family tree
        familyTreeElement.appendChild(childDiv);
    })
    .catch(error => console.error('Error loading JSON:', error));
