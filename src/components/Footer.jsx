const currentYear = new Date().getFullYear();

const Footer = () => {
    return (
        <footer>
            <p>© {currentYear} Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;