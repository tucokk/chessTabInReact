import Quadrado from "@/components/Quadrado";

export default function tabuleiro() {

    return (
        <div style={{
            margin:"auto",
            marginTop: "80px",
            width: 50*8,
        }}>
            {gerarTabuleiro()}
        </div>
    )
}

function gerarTabuleiro() {
    const tabuleiro = []
    let row_cont = 0
    for (let i = 0; i <= 63; i++) {
        if (i % 8 == 0 && i != 0) {
            tabuleiro.push(<br></br>)
            row_cont++
        }
        if (row_cont % 2 == 0) {
            if (i % 2 == 0) {
                tabuleiro.push(<Quadrado color="white"/>)
            } else {
                tabuleiro.push(<Quadrado color="black"/>)
            }
        } else {
            if (i % 2 == 0) {
                tabuleiro.push(<Quadrado color="black"/>)
            } else {
                tabuleiro.push(<Quadrado color="white"/>)
            }
        }
        
        
    }
    return tabuleiro
}