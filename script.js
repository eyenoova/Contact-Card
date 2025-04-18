let currentLang = 'en';

        function toggleMenu() {
            const nav = document.querySelector('.mobile-nav');
            nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
        }

        function toggleLang() {
            currentLang = currentLang === 'en' ? 'ar' : 'en';
            document.documentElement.lang = currentLang;
            document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';

            const elements = {
                '.hero h2': { en: 'Let’s Connect!', ar: 'يلا نتواصل!' },
                '.hero p': { en: 'Choose your preferred platform to reach us', ar: 'اختار الطريقة اللي تناسبك للتواصل معانا' },
                'nav a:nth-child(1)': { en: 'Home', ar: 'الرئيسية' },
                'nav a:nth-child(2)': { en: 'Contact', ar: 'التواصل' },
                '.buttons a:nth-child(1)': { en: ' Facebook', ar: 'فيسبوك ' },
                '.buttons a:nth-child(2)': { en: ' Instagram', ar: 'انستجرام  ' },
                '.buttons a:nth-child(3)': { en: 'Contact Info', ar: 'معلومات التواصل ' },
                '.buttons a:nth-child(4)': { en: 'Website', ar: 'الويب سايت' },
                '.contact-card h3': { en: 'Contact Information', ar: 'معلومات التواصل' },
                '.contact-card .contact-item-phone': { en: '📞 Phone: 01012345678', ar: 'رقم الهاتف : 01012345678📞' },
                '.contact-card .contact-item-email': { en: '📧 Email: contact@eyenova.com', ar: 'البريد الالكتروني : contact@eyenova.com' },
                '.contact-card .contact-item-address': { en: '📍 Address: Cairo, Egypt', ar: 'العنوان : Cairo, Egypt' },
                '.form-section h3': { en: 'Send us a Message', ar: 'ارسل لنا رسالة' },
                '.form-input-name': { en: 'Your Name', ar: 'اسمك' },
                '.form-input-email': { en: 'Your Email', ar: 'بريدك الالكتروني' },
                '.form-input-message': { en: 'Your Message', ar: 'رسالتك' },
                '.response-message': { en: 'Message sent successfully!', ar: 'رسالتك قد تم ارسالها بنجاح!' },
                '.form-section button': { en: 'Send', ar: 'إرسال' },
                '.map-section h3': { en: 'Find Us Here', ar: 'موقعنا' },
                'footer': { en: ' 2025 EYENOVA. All rights reserved.', ar: ' 2025 EYENOVA. جميع الحقوق محفوظة.' }
            };

            for (const selector in elements) {
                const el = document.querySelector(selector);
                if (el) {
                    if (el.hasAttribute('placeholder')) {
                        el.placeholder = elements[selector][currentLang];
                    } else {
                        el.textContent = elements[selector][currentLang];
                    }
                }
            }

            // Update form direction
            const form = document.querySelector('.form-section form');
            if (form) {
                form.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
                form.querySelectorAll('input, textarea').forEach(input => {
                    input.style.direction = currentLang === 'ar' ? 'rtl' : 'ltr';
                    input.style.textAlign = currentLang === 'ar' ? 'right' : 'left';
                });
            }
        }