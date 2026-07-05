// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if(target){
            target.scrollIntoView({
                behavior:'smooth'
            });
        }
    });
});

// Header background on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');

    if(window.scrollY > 50){
        header.style.background = "rgba(5,8,22,.95)";
    }else{
        header.style.background = "rgba(5,8,22,.8)";
    }
});
.features{
    padding:100px 8%;
    background:#081120;
}

.features h2{
    text-align:center;
    font-size:40px;
    margin-bottom:50px;
    color:#22d3ee;
}

.feature-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
    gap:25px;
}

.feature-card{
    background:#0f172a;
    padding:30px;
    border-radius:20px;
    border:1px solid rgba(34,211,238,.2);
    transition:.3s;
}

.feature-card:hover{
    transform:translateY(-10px);
    border-color:#22d3ee;
    box-shadow:0 0 20px rgba(34,211,238,.3);
}

.feature-card h3{
    margin-bottom:15px;
    color:#22d3ee;
                                 }
