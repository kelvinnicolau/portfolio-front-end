import React, { useEffect } from 'react';
import styles from "@/styles/components/Footer.module.css";

const Footer = () => {
    useEffect(() => {
        const items = document.querySelectorAll('.footer-item');
        items.forEach(item => {
            const link = item.querySelector('a');
            if (link) {
                const text = link.textContent;
                const newLink = document.createElement('a');
                newLink.href = link.href;
                newLink.textContent = text;
                newLink.classList.add('classAnimation');
                item.appendChild(newLink);
            }
        });
    }, []);

    return (
        <footer className={styles.footerContainer}>
            <div id="itemOne" className={styles.footerItem }>
                <div>
                    <a href="#about">Sobre</a>
                </div>
            </div>
            <div id="itemTwo" className={styles.footerItem }>
                <div>
                    <a href="#projects">Projetos</a>
                </div>
            </div>
            <div id="itemThree" className={styles.footerItem }>
                <div>
                    <a href="#contact">Contato</a>
                </div>
            </div>
            <p>© {new Date().getFullYear()} Seu Nome. Todos os direitos reservados.</p>
        </footer>
    );
};

export default Footer;
