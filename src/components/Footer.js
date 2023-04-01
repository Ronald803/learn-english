import React from 'react';

const Footer = () => {
    return (
        <footer class="bg-dark text-light card" style={{"marginTop":"10px"}}>
            <div class="container card-body" style={{"maxWidth": "1200px"}}>
                <div class="row">
                    <div class="col-sm-6">
                        <h5>Visitanos</h5>
                        <p>Dirección: Calle Tihuanaco N°8, frente Hotel Europa</p>
                        
                    </div>
                    <div class="col-sm-3">
                        <h5>Contactanos</h5>
                        <ul class="list-unstyled">
                            <li>Celular: 62568755</li>
                            <li>Teléfonos: 2 311775 - 2 312866</li>
                        </ul>
                    </div>
                    <div class="col-sm-3">
                        <h5>Enlaces útiles</h5>
                        <ul class="list-unstyled">
                            <li>Acerca de nosotros</li>
                            <li>Términos y condiciones</li>
                            <li>Política de privacidad</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

