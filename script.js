    const dropdownButton = document.getElementById('dropdownButton');
    const dropdownMenu = document.getElementById('dropdownMenu');
    const dropdown = dropdownButton.parentElement;

    let isMenuOpen = false;

    dropdownButton.addEventListener('click', (e) => {
        e.stopPropagation();
        isMenuOpen = !isMenuOpen;
        dropdownMenu.classList.toggle('show');
        dropdownButton.querySelector('svg').style.transform = isMenuOpen ? 'rotate(180deg)' : '';
    });

    dropdown.addEventListener('mouseenter', () => {
        isMenuOpen = true;
        dropdownMenu.classList.add('show');
        dropdownButton.querySelector('svg').style.transform = 'rotate(180deg)';
    });

    document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target)) {
            isMenuOpen = false;
            dropdownMenu.classList.remove('show');
            dropdownButton.querySelector('svg').style.transform = '';
        }
    });

    dropdownMenu.querySelectorAll('a').forEach(item => {
        item.addEventListener('click', (e) => {
            e.stopPropagation(); 
            isMenuOpen = false;
            dropdownMenu.classList.remove('show');
            dropdownButton.querySelector('svg').style.transform = '';
        });
    });


    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const videoButton = document.querySelector('.video-play-button');
    if (videoButton) {
        videoButton.addEventListener('click', () => {
            console.log('Video play clicked');
        });
    }

    
    const headers = document.querySelectorAll('.mainHeader');

    headers.forEach((header) => {
        const content = header.nextElementSibling; 
        const arrow = header.querySelector('.arrow'); 

        header.addEventListener('click', () => {
            content.classList.toggle('active'); 
            arrow.classList.toggle('active'); 
        });
    });


    function openModal(card) {
        const name = card.getAttribute('data-name');
        const id = card.getAttribute('data-id');
        const email = card.getAttribute('data-email');
        const description = card.getAttribute('data-description');
        const img = card.getAttribute('data-img');
    
        document.getElementById('modal-name').textContent = name;
        document.getElementById('modal-id').textContent = `ID: ${id}`;
        document.getElementById('modal-email').textContent = `Email: ${email}`;
        document.getElementById('modal-description').textContent = description;
        document.getElementById('modal-avatar').src = img;
    
        document.getElementById('modal').classList.remove('hidden');
      }
    
      function closeModal() {
        document.getElementById('modal').classList.add('hidden');
      }