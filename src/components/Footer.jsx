export const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--dark-grey)', color: 'white', padding: '40px 0', marginTop: '50px' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <h3>BAHANDI</h3>
          <p>© 2026 ТОО Баханди. Все права защищены</p>
        </div>
        <div>
          <h4>Компания</h4>
          <p>Франшиза</p>
          <p>Вакансии</p>
          <p>Оферта</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;