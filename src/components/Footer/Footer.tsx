import { Facebook, Instagram, MapPin, Phone } from "lucide-react";
import './Footer.css'
import { Container } from "../Container/Container";

export function Footer() {
    return (
        <footer>
            <Container>
                <div className="content-footer">
                    <div className="adress">
                        <h2>Madame Modas</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit omnis, rem dicta qua</p>
                        <div className="location">
                            <MapPin />
                            Santa Luzia - MA, 6539000-0
                        </div>

                        <div className="copy">
                            <span>Todos os direitos reservados Marcos Silva 2024.</span>
                        </div>
                    </div>
                    <div className="social-media">
                        <ul>
                            <li>
                                <a href="#">
                                    <Instagram />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <Facebook />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <Phone />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </footer>
    )
}