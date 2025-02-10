document.addEventListener("DOMContentLoaded",()=>
{
    const button=document.querySelector(".location");
    button.addEventListener("click",()=>{
       const pop=document.querySelector(".popoveradd");
       pop.style.display='block';
       const close=document.querySelector("#exit");
       close.addEventListener("click",()=>{
        const popclose=document.querySelector(".popoveradd");
        popclose.style.display='none';
       })
    });

        const navbar = document.getElementById("navbar");
        const menuItems = document.querySelectorAll("#navbar ul li a");
        const gridContainer = document.querySelector(".grid-container");
    
        
        window.addEventListener("scroll", function () {
            if (window.scrollY > 50) {
                navbar.style.backgroundColor = " #006AF2"; //optional #3c59de
                navbar.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.3)";
                gridContainer.style.transform = "translateY(20px)"; // Move grid slightly down
            } else {
                navbar.style.backgroundImage ="url(images/Ai3.png)";
                navbar.style.backgroundColor='#00268B';
                navbar.style.backgroundSize = "50%";
                navbar.style.backgroundRepeat = "no-repeat";
                navbar.style.backgroundPosition = "center center";
                navbar.style.color="FFD700";
                navbar.style.boxShadow = "none";
                gridContainer.style.transform = "translateY(0)"; // Reset grid position
            }
        });
    
        
        menuItems.forEach(item => {
            item.addEventListener("mouseenter", function () {
                this.style.color = "#FFD700"; // Gold color on hover
                this.style.transform = "scale(1.1)"; // Slightly enlarge text
            });
            item.addEventListener("mouseleave", function () {
                this.style.color = "#FFFFFF"; // White text
                this.style.transform = "scale(1)"; // Reset size
            });
        });
    
});
