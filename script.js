document.addEventListener('DOMContentLoaded', function() {
    
    // ================= 1. كود قائمة الموبايل (Hamburger Menu) =================
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".navbar ul");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });

        // إغلاق القائمة عند الضغط على أي رابط
        document.querySelectorAll(".navbar a").forEach(n => n.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }));
    }

    // ================= 2. كود فلترة المنيو (إن وجد) =================
    const filterBtns = document.querySelectorAll('.filter-btn');
    const menuCategories = document.querySelectorAll('.menu-category');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            menuCategories.forEach(category => {
                if (filterValue === 'all') {
                    category.style.display = 'block';
                    category.style.animation = 'fadeIn 0.5s ease';
                } else {
                    if (category.getAttribute('data-category') === filterValue) {
                        category.style.display = 'block';
                        category.style.animation = 'fadeIn 0.5s ease';
                    } else {
                        category.style.display = 'none';
                    }
                }
            });
        });
    });

    // ================= 3. كود التنقل السلس (Smooth Scroll) =================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); 

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

});

// إضافة Keyframes للأنيميشن
const styleSheet = document.createElement("style");
styleSheet.innerText = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(styleSheet);