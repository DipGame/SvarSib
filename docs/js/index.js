
document.addEventListener("DOMContentLoaded", function () {

    function addClass(el, class_name) {
        el.classList.add(class_name);
    }
    function removeClass(el, class_name) {
        el.classList.remove(class_name);
    }
    function toggleClass(el, class_name) {
        el.classList.toggle(class_name);
    }

    let loadSvg = document.getElementById('load-svg');

    function addLoad() {
        addClass(loadSvg, 'open');
    }
    function removeLoad() {
        removeClass(loadSvg, 'open');
    }

    const header = document.querySelector('header');
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');
    const btnOpenHeaderMenu = document.getElementById('btn-open-header-menu');
    const btnCloseHeaderMenu = document.getElementById('btn-close-header-menu');

    if (btnOpenHeaderMenu) {
        btnOpenHeaderMenu.addEventListener('click', () => {
            addClass(header, 'open');
        });
    }
    if (btnCloseHeaderMenu) {
        btnCloseHeaderMenu.addEventListener('click', () => {
            removeClass(header, 'open');
        });
    }

    if (document.querySelector('header')) {
        const headerBot = document.querySelector('header');



        if (!headerBot || !main) return;

        main.style.marginTop = `${headerBot.offsetHeight}px`;

        // Сохраняем исходную позицию элемента
        let originalHeaderTop = headerBot.offsetTop;

        function handleScroll() {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;

            // Если прокрутили до верха страницы
            if (scrollTop === 0) {
                headerBot.classList.remove('fixed'); // Удаляем класс fixed
            }
            // Если прокрутили ниже исходной позиции header
            else if (scrollTop >= originalHeaderTop) {
                headerBot.classList.add('fixed'); // Добавляем класс fixed
            }
        }

        // Обработчик изменения размера окна
        function handleResize() {
            // Пересчитываем исходную позицию при изменении размера окна
            originalHeaderTop = headerBot.offsetTop;
            handleScroll(); // Вызываем handleScroll для корректировки состояния
        }

        // Добавляем обработчики событий
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        // Убедимся, что скрипт выполняется после полной загрузки DOM
        document.addEventListener('DOMContentLoaded', () => {
            // Пересчитываем originalHeaderTop после загрузки DOM
            originalHeaderTop = headerBot.offsetTop;
            handleScroll(); // Вызываем handleScroll для корректировки состояния
        });
    }

    if (document.querySelector('.drop-1')) {
        const drop1s = document.querySelectorAll('.drop-1');

        drop1s.forEach(el => {
            let headerMenuFirstLinkCont = el.querySelector('.header-menu-first-link-cont');
            if (headerMenuFirstLinkCont) {
                headerMenuFirstLinkCont.addEventListener('click', (e) => {
                    if (window.screen.width > 1290 && !headerMenuFirstLinkCont.closest(".footer-menu") && !headerMenuFirstLinkCont.closest(".section-menu")) {
                        return;
                    }
                    e.preventDefault();
                    toggleClass(el, 'open');
                });
            }
        });
    }

    if (document.querySelector('.catalog')) {

        const catalog = document.querySelector('.catalog');

        if (catalog.querySelector(".sect .title")) {
            const titles = catalog.querySelectorAll(".sect .title");

            titles.forEach((title) => {

                let sect_check = title.closest(".sect"); // Находим родительский .sect
                let cont_check = sect_check.querySelector(".cont"); // Находим .cont внутри .sect

                if (sect_check.classList.contains("active")) {
                    // Вычисляем реальную высоту содержимого
                    cont_check.style.height = "auto"; // Временно устанавливаем высоту в "auto"
                    const height = cont_check.scrollHeight; // Получаем высоту содержимого
                    cont_check.style.height = "0"; // Возвращаем высоту к 0 для анимации
                    setTimeout(() => {
                        cont_check.style.height = `${height}px`; // Устанавливаем высоту для анимации
                    }, 10); // Небольшая задержка для корректной работы браузера
                } else {
                    // Анимируем закрытие
                    cont_check.style.height = `${cont_check.scrollHeight}px`; // Фиксируем текущую высоту
                    setTimeout(() => {
                        cont_check.style.height = "0"; // Уменьшаем высоту до 0
                    }, 10); // Небольшая задержка для корректной работы браузера
                }

                title.addEventListener("click", () => {
                    const sect = title.closest(".sect"); // Находим родительский .sect
                    const cont = sect.querySelector(".cont"); // Находим .cont внутри .sect

                    // Переключаем класс active
                    sect.classList.toggle("active");

                    if (sect.classList.contains("active")) {
                        // Вычисляем реальную высоту содержимого
                        cont.style.height = "auto"; // Временно устанавливаем высоту в "auto"
                        const height = cont.scrollHeight; // Получаем высоту содержимого
                        cont.style.height = "0"; // Возвращаем высоту к 0 для анимации
                        setTimeout(() => {
                            cont.style.height = `${height}px`; // Устанавливаем высоту для анимации
                        }, 10); // Небольшая задержка для корректной работы браузера
                    } else {
                        // Анимируем закрытие
                        cont.style.height = `${cont.scrollHeight}px`; // Фиксируем текущую высоту
                        setTimeout(() => {
                            cont.style.height = "0"; // Уменьшаем высоту до 0
                        }, 10); // Небольшая задержка для корректной работы браузера
                    }
                });
            });
        }

    }

    if (document.querySelector('.header-overlay')) {
        const headerOverlay = document.querySelector('.header-overlay');

        headerOverlay.addEventListener('click', () => {
            removeClass(header, 'open');
        });
    }

    if (document.querySelector('[data-href]')) {
        const data_href = document.querySelectorAll('[data-href]');

        data_href.forEach(element => {

            element.addEventListener('click', (e) => {
                if (e.target.getAttribute('data-popup-open')) {
                    return;
                }

                if (e.target.tagName == 'A') {
                    return;
                }
                if (e.target.closest(".drop-1")) {
                    return;
                }

                window.location = element.getAttribute('data-href');
            })
        });
    }

    if (document.querySelector('.checkbox')) {
        const checkboxs = document.querySelectorAll('.checkbox');

        checkboxs.forEach(el => {
            let checkBoxBtn = el.querySelector('.check-box-btn');

            checkBoxBtn.addEventListener('click', () => {
                if (checkBoxBtn.getAttribute('data-toggle') == 'y') {
                    toggleClass(el, 'checked');
                } else {
                    addClass(el, 'checked');
                    removeClass(el, 'err');
                }
            })
        });
    }

    if (document.querySelector('.popup-file-input')) {
        let fileInputs = document.querySelectorAll('.popup-file-input');
        fileInputs.forEach(fileInput => {
            let MAX_FILE_BYTES = 20 * 1024 * 1024; // 20 MB

            let isValidFiles = (fileList) => {
                for (let file of fileList) {
                    if (file.size > MAX_FILE_BYTES) return false;
                }
                return true;
            };

            let notify = (message) => {
                alert(message);
            };

            let formatBytes = (bytes) => {
                if (bytes === 0) return '0 Б';
                let units = ['Б', 'КБ', 'МБ', 'ГБ'];
                let i = Math.floor(Math.log(bytes) / Math.log(1024));
                let value = bytes / Math.pow(1024, i);
                return `${value.toFixed(value >= 100 ? 0 : value >= 10 ? 1 : 2)} ${units[i]}`;
            };

            // Получаем элементы для конкретного fileInput внутри обработчика
            fileInput.addEventListener('change', function () {
                // Используем this вместо fileInput для гарантии правильного контекста
                let currentFileInput = this;
                let fileContainer = currentFileInput.closest('.popup-file-container');
                let fileNameContainer = fileContainer?.querySelector('.file-name');

                let files = currentFileInput.files || [];
                if (!isValidFiles(files)) {
                    notify('Размер файла должен быть не более 20 МБ.');
                    currentFileInput.value = '';
                    if (fileNameContainer) fileNameContainer.innerHTML = '';
                    return;
                }
                // Остановился тут, надо убрать бордер и все остальное когда файл добавили
                if (fileNameContainer) {
                    if (!files.length) {
                        fileNameContainer.innerHTML = '';
                        return;
                    }
                    let items = Array.from(files).map(f => {
                        let safeName = f.name.replace(/</g, '&lt;').replace(/>/g, '&gt;');
                        return `<div class="file-row"><span class="file-row__name">${safeName}</span><span class="file-row__size">${formatBytes(f.size)}</span></div>`;
                    });
                    fileNameContainer.innerHTML = items.join('');
                    addClass(fileContainer, 'add-file');
                }
            });

            let formEl = fileInput.closest('form');
            if (formEl) {
                formEl.addEventListener('submit', function (e) {
                    // Используем fileInput из замыкания, но проверяем его через closest
                    let currentFileInput = formEl.querySelector('.popup-file-input');
                    if (currentFileInput) {
                        let files = currentFileInput.files || [];
                        if (!isValidFiles(files)) {
                            e.preventDefault();
                            notify('Невозможно отправить: файл больше 20 МБ.');
                        }
                    }
                });
            }
        });
    }

    if (document.querySelector('[data-tabs-container]')) {
        const tabsContainer = document.querySelectorAll('[data-tabs-container]');
        tabsContainer.forEach(el => {
            let tabs = el.querySelectorAll('[data-tab]');

            let num = 0;
            let num_1 = 0;

            tabs.forEach(el_1 => {

                let allTabItems = el.querySelectorAll('[data-tab-item]');

                if (num < 1) {
                    addClass(el_1, 'active');
                }

                allTabItems.forEach(item => {
                    if (num_1 < 1) {
                        removeClass(item, 'invise');
                    }
                    num_1++;
                });

                el_1.addEventListener('click', () => {

                    allTabItems.forEach(item => addClass(item, 'invise'));

                    let tabItem = el_1.getAttribute('data-tab');
                    let tabItemEl = el.querySelector(`[data-tab-item="${tabItem}"]`);
                    if (tabItemEl) {
                        removeClass(tabItemEl, 'invise');
                    }

                    tabs.forEach(el_2 => {
                        removeClass(el_2, 'active');
                    });

                    addClass(el_1, 'active');
                });

                num++;

            });
        });
    }

    if (document.querySelector('form')) {
        var overlay = document.querySelector('.overlay');
        var popupCheck = document.querySelector('.popupCheck')
        var popupCheckCloseBtn = popupCheck.querySelector('.close-btn');

        popupCheckCloseBtn.addEventListener('click', () => {
            removeClass(overlay, 'open');
            removeClass(popupCheck, 'open');
        })
        overlay.addEventListener('click', () => {
            document.querySelectorAll('.open').forEach(el => {
                removeClass(el, 'open');
            })
        })

        if (document.querySelector('.btn_pop')) {
            const btnPopAdd = document.querySelectorAll('.btn_pop')

            btnPopAdd.forEach(element => {
                element.addEventListener('click', () => {
                    addClass(overlay, 'open');
                })
            });
        }

    }

    if (document.querySelector('[data-num-cont]')) {
        const numConts = document.querySelectorAll('[data-num-cont]');
        numConts.forEach(el => {
            let num_1 = 1;
            let num = el.querySelectorAll('[data-num]');

            num.forEach(el_2 => {
                el_2.textContent = num_1;
                num_1++;
            });
        });
    }

    if (document.querySelector('[data-popup-open]')) {
        let popupOpenBtns = document.querySelectorAll('[data-popup-open]');

        popupOpenBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {

                if (e.target.tagName == 'A' && !e.target.getAttribute('data-popup-open')) {
                    return;
                }

                e.preventDefault();

                let btnDataId = btn.getAttribute('data-popup-open');

                let dataPopupProductName = btn.getAttribute('data-popup-product-name');
                let dataPopupProductPrice = btn.getAttribute('data-popup-product-price');
                let dataPopupProductImg = btn.getAttribute('data-popup-product-img');

                let dataPopupDetailPage = btn.getAttribute('data-popup-detail-page');

                let popup = document.getElementById(`${btnDataId}`);
                if (popup) {

                    let popupForm = popup.querySelector("form");

                    if (popupForm) {

                        let dataProductInfo = popupForm.querySelector('[data-product-info]');

                        if (dataProductInfo) {
                            removeClass(dataProductInfo, 'invise');
                        }

                        let detailPageInput = popupForm.querySelector('input[name="detail-page"]');
                        if (detailPageInput) {
                            popupForm.removeChild(detailPageInput);
                        }

                        if (dataPopupDetailPage) {
                            let detailPageInput = document.createElement("input");
                            detailPageInput.type = "hidden";
                            detailPageInput.name = "detail-page";
                            detailPageInput.value = dataPopupDetailPage;
                            popupForm.appendChild(detailPageInput);
                        }

                        let productNameInput = popupForm.querySelector('input[name="product-name"]');
                        if (productNameInput) {
                            if (dataProductInfo) {
                                if (dataProductInfo.querySelector('[data-product-title]')) {
                                    dataProductInfo.querySelector('[data-product-title]').innerHTML = "";
                                }
                                if (dataProductInfo.querySelector('[data-product-price]')) {
                                    dataProductInfo.querySelector('[data-product-price]').innerHTML = "";
                                }
                                if (dataProductInfo.querySelector('[data-product-img]')) {
                                    dataProductInfo.querySelector('[data-product-img]').src = "";
                                    dataProductInfo.querySelector('[data-product-img]').alt = "";
                                }
                            }
                            popupForm.removeChild(productNameInput);
                        }

                        if (dataPopupProductName) {
                            let productNameInput = document.createElement("input");
                            productNameInput.type = "hidden";
                            productNameInput.name = "product-name";
                            productNameInput.value = dataPopupProductName;
                            popupForm.appendChild(productNameInput);

                            if (dataProductInfo) {
                                if (dataPopupProductImg) {
                                    removeClass(dataProductInfo.querySelector('[data-product-img]').closest('.img'), 'invise');
                                    dataProductInfo.querySelector('[data-product-img]').src = dataPopupProductImg;
                                    if (dataPopupProductName) {
                                        dataProductInfo.querySelector('[data-product-img]').alt = dataPopupProductName;
                                    }
                                } else {
                                    addClass(dataProductInfo.querySelector('[data-product-img]').closest('.img'), 'invise');
                                }
                                if (dataPopupProductName) {
                                    removeClass(dataProductInfo.querySelector('[data-product-title]'), 'invise');
                                    dataProductInfo.querySelector('[data-product-title]').innerHTML = dataPopupProductName;
                                } else {
                                    addClass(dataProductInfo.querySelector('[data-product-title]'), 'invise');
                                }
                                if (dataPopupProductPrice) {
                                    removeClass(dataProductInfo.querySelector('[data-product-price]'), 'invise');
                                    dataProductInfo.querySelector('[data-product-price]').innerHTML = dataPopupProductPrice;
                                } else {
                                    addClass(dataProductInfo.querySelector('[data-product-price]'), 'invise');
                                }
                            }

                        } else {
                            if (dataProductInfo) {
                                addClass(dataProductInfo, 'invise');
                            }
                        }

                        let productPriceInput = popupForm.querySelector('input[name="product-price"]');
                        if (productPriceInput) {
                            popupForm.removeChild(productPriceInput);
                        }

                        if (dataPopupProductPrice) {
                            let productPriceInput = document.createElement("input");
                            productPriceInput.type = "hidden";
                            productPriceInput.name = "product-price";
                            productPriceInput.value = dataPopupProductPrice;
                            popupForm.appendChild(productPriceInput);
                        }

                        let productImgInput = popupForm.querySelector('input[name="product-img"]');
                        if (productImgInput) {
                            popupForm.removeChild(productImgInput);
                        }

                        if (dataPopupProductImg) {
                            let productImgInput = document.createElement("input");
                            productImgInput.type = "hidden";
                            productImgInput.name = "product-img";
                            productImgInput.value = dataPopupProductImg;
                            popupForm.appendChild(productImgInput);
                        }
                    }

                    addClass(overlay, 'open');
                    addClass(popup, 'open');
                } else {
                    console.error(`Попап с ID: ${btnDataId} не найден`);
                }
            })
        });
    }

    if (document.querySelector('.form-all')) {
        const formSect = document.querySelectorAll(".form-all");
        const titlePopupCheck = popupCheck.querySelector('.h2');

        let widgetId;

        function handleCaptcha(btn, input) {

            // if (!window.smartCaptcha) {
            //     console.error("SmartCaptcha не загружен.");
            //     return;
            // }

            // widgetId = window.smartCaptcha.render(`captcha-container`, {
            //     sitekey: 'ysc1_Y9uiAkGdpunKlCiElSagu658pl0QGAKlFwn3Qlsze326e63b', // Замените на ваш Client Key
            //     invisible: true, // Указываем, что капча невидимая
            //     callback: (token) => {
            //         input.value = token;
            //         btn.click();
            //     },
            // });
        }

        formSect.forEach(formSect => {

            let form = formSect.querySelector("form");
            let formBtn = formSect.querySelector("[type='submit']");
            let nameInp = formSect.querySelector("[name='name']");
            let phoneInp = formSect.querySelector("[name='phone']");

            let checkBoxBtn = formSect.querySelector("[data-processing]");

            if (checkBoxBtn) {
                removeClass(checkBoxBtn, 'checked');
            }

            if (formSect.classList.contains('popupForm')) {
                let closePopupBtn = formSect.querySelector('.close-btn');

                closePopupBtn.addEventListener('click', () => {
                    removeClass(overlay, 'open');
                    removeClass(formSect, 'open');
                })

                formSect.addEventListener('click', (e) => {
                    if (e.target.classList.contains('popupForm')) {
                        overlay.click();
                    }
                })
            }

            function allCheck() {
                if (nameInp) {
                    if (checkInputsValid(nameInp, 1) && checkInputsValid(phoneInp, 17) && checkCheckBox(checkBoxBtn)) {
                        return true;
                    } else {
                        return false;
                    }
                } else {
                    if (checkInputsValid(phoneInp, 17) && checkCheckBox(checkBoxBtn)) {
                        return true;
                    } else {
                        return false;
                    }
                }

            }

            function checkCheckBox(checkbox) {
                if (checkbox) {
                    if (checkbox.classList.contains('checked')) {
                        removeClass(checkbox, 'err');
                        return true;
                    } else {
                        addClass(checkbox, 'err');
                        return false;
                    }
                } else {
                    return true;
                }
            }

            window.addEventListener("DOMContentLoaded", function () {
                [].forEach.call(document.querySelectorAll("[name='phone']"), function (input) {
                    var keyCode;
                    function mask(event) {
                        event.keyCode && (keyCode = event.keyCode);
                        var pos = this.selectionStart;
                        if (pos < 3) event.preventDefault();
                        var matrix = "+7 (___) ___ ____",
                            i = 0,
                            def = matrix.replace(/\D/g, ""),
                            val = this.value.replace(/\D/g, ""),
                            new_value = matrix.replace(/[_\d]/g, function (a) {
                                return i < val.length ? val.charAt(i++) : a
                            });
                        i = new_value.indexOf("_");
                        if (i != -1) {
                            i < 5 && (i = 3);
                            new_value = new_value.slice(0, i)
                        }
                        var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                            function (a) {
                                return "\\d{1," + a.length + "}"
                            }).replace(/[+()]/g, "\\$&");
                        reg = new RegExp("^" + reg + "$");
                        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
                            this.value = new_value;
                        }
                        if (event.type == "blur" && this.value.length < 5) {
                            this.value = "";
                        }
                    }

                    input.addEventListener("input", mask, false);
                    input.addEventListener("focus", mask, false);
                    input.addEventListener("blur", mask, false);
                    input.addEventListener("keydown", mask, false);

                });
            });

            $(function () {
                $(nameInp).keyup(function () {
                    sergey = $(this).val().toLowerCase(), spout = 'http://,https,url,.ru,.com,.net,.tk,php,.ucoz,www,.ua,.tv,.info,.org,.su,.ру,.су,.ком,.инфо,//'.split(',');
                    for (litvinov = 0; litvinov < spout.length; litvinov++) {
                        if (sergey.search(spout[litvinov]) != -1) {
                            $(this).val(sergey.replace(spout[litvinov], '[Запрещено]'));
                            return true;
                        }
                    }
                });
            });

            function checkInputsValid(input, num) {
                if (input.value.length < num) {
                    input.parentNode.classList.add("err");
                    formBtn.disabled = true;
                    return false;
                } else {
                    input.parentNode.classList.remove("err");

                    return true;
                }
            }

            let check;

            function addLisInput(input, num) {
                checkInputsValid(input, num);
                input.addEventListener('input', check = () => {
                    checkInputsValid(input, num);
                    if (allCheck()) {
                        formBtn.disabled = false;
                    } else {
                        formBtn.disabled = true;
                    }
                })
            }

            function removeLisInput(input) {
                input.removeEventListener('input', check)
            }

            let check_4;

            function addLisCheckBox(checkbox) {
                checkCheckBox(checkbox);
                checkbox.addEventListener('click', check_4 = () => {
                    checkCheckBox(checkbox);
                    if (allCheck()) {
                        formBtn.disabled = false;
                    } else {
                        formBtn.disabled = true;
                    }
                })
            }

            function removeLisCheckBox(checkbox) {
                checkbox.removeEventListener('click', check_4);
            }

            function clearInputs(input) {
                removeLisInput(input);

                if (checkBoxBtn) {
                    removeClass(checkBoxBtn, 'err');
                    removeClass(checkBoxBtn, 'checked');
                }

                input.value = '';
            }

            function handleTextGood() {
                // window.smartCaptcha.destroy(widgetId);
                addLoad();
                setTimeout(() => {
                    removeLoad();
                    titlePopupCheck.innerHTML = 'Спасибо за заявку!<br> Скоро мы вам перезвоним!';
                    removeClass(formSect, 'open');
                    addClass(overlay, 'open')
                    addClass(popupCheck, 'open')

                    formSect.querySelectorAll('input').forEach(el => {
                        el.value = '';
                    });

                    if (nameInp) {
                        clearInputs(nameInp);
                    }
                    clearInputs(phoneInp);

                    clearInputs(captchaInp);
                    setTimeout(() => {
                        document.querySelectorAll('.open').forEach(el => {
                            removeClass(el, 'open');
                        })
                    }, 3500);
                }, 1000);

            }

            function handleTextNoGood() {
                removeLoad();
                titlePopupCheck.textContent = 'Повторите попытку позже';
                removeClass(formSect, 'open');
                addClass(popupCheck, 'open');
                setTimeout(() => {
                    if (overlay.classList.contains('open')) {
                        addClass(formSect, 'open');
                    }
                }, 3500);
            }

            function handleTextError() {
                removeLoad();
                titlePopupCheck.textContent = 'Что-то пошло не так';
                removeClass(formSect, 'open');
                addClass(popupCheck, 'open');
                setTimeout(() => {
                    if (overlay.classList.contains('open')) {
                        addClass(formSect, 'open');
                    }
                }, 3500);
            }

            // Создаем скрытое поле для токена капчи
            let captchaTokenInput = document.createElement('input');
            captchaTokenInput.type = 'hidden';
            captchaTokenInput.name = `captcha_token`;

            // Добавляем скрытое поле в начало текущей формы
            form.prepend(captchaTokenInput);

            let captchaInp = form.querySelector(`[name="captcha_token"]`);

            form.addEventListener('submit', (e) => {
                e.preventDefault();
                removeLisInput(phoneInp);

                if (nameInp) {
                    removeLisInput(nameInp);
                    addLisInput(nameInp, 1);
                }
                addLisInput(phoneInp, 17);

                if (checkBoxBtn) {
                    removeLisCheckBox(checkBoxBtn);
                    addLisCheckBox(checkBoxBtn);
                }

                if (allCheck()) {
                    // if (!captchaInp.value) {
                    //     handleCaptcha(formBtn, captchaInp);
                    //     window.smartCaptcha.execute(widgetId);
                    //     return;
                    // } else {
                    //     addLoad();

                    //     let formData = new FormData(form);
                    //     formData.append('captcha_token', captchaInp.value);
                    //     fetch('/local/templates/main/tools/send.php', {
                    //         method: 'POST',
                    //         body: formData,
                    //     })
                    //         .then((res) => res.json())
                    //         .then(result => {
                    //             if (result.success) {
                    //                 handleTextGood();
                    //             } else {
                    //                 handleTextNoGood();
                    //             }
                    //         })
                    //         .catch((err) => {
                    //             handleTextError();
                    //             console.log(err);
                    //         });
                    // }
                    handleTextGood();
                }

            })
        });
    }

    if (document.getElementById('is-admin')) {
        console.log('index.js finish work');
    }
});