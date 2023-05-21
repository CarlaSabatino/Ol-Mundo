import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/Foto Carla.jpg";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Carla Sabatino!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto da Carla"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Oi, tudo bem? Eu sou estudante de Front-end na Alura através do programa One da Oracle e estou feliz de te ver por aqui.
            </p>
            <p className={styles.paragrafo}>
                Minha história começou no segundo grau, cursando eletrônica na escola técnica Rezende Rammel (ETRR - RJ), fiz estágio em uma empresa do ramo de telecomunicações, então resolvi que iria estudar Engenharia de Telecomunicações.
            </p>
            <p className={styles.paragrafo}>
                No ensino superior, escolhi cursar Engenharia Elétrica  com ênfase em Telecomunicações no Centro Federal de Educação Tecnológica - Celso Suckow da Fonseca - (CEFET-RJ). Através da Engenharia pude fazer estágio em algumas empresas na qual me especializei no ramos da Fibra Óptica.
            </p>
            <p className={styles.paragrafo}>
                Atualmente trabalho em uma empresa de telecomunicações de âmbito nacional na qual sou responsável pela gestão da Implantação de fibra óptica nos Estados do Rio de Janeiro e São Paulo.
            </p>
            <p className={styles.paragrafo}>
                Querendo conhecer novos horizontes, fui apresentada a este mundo da programação na qual me apaixonei. Na alura, estudei HTML, CSS, Java Script, GIT/GIT HUB, Soft skills e React.

            </p>
            <p className={styles.paragrafo}>
                Estou muito feliz e agradecida em participar desta parceria entre a Oracle One e Alura. É um ensino maravilhoso e uma oportunidade incrível.
            </p>
        </PostModelo>
    )
}