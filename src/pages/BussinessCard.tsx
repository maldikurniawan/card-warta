import Card from "../components/Card"
import Circle from "../components/Circle"

const BussinessCard = () => {
    return (
        <div className="relative min-h-screen flex justify-center items-center">
            <Circle />
            <Card>
                <div className="flex flex-col">
                    <div>Logo</div>
                    <div>Foto</div>
                    <div>Nama</div>
                    <div>Alamat</div>
                </div>
            </Card>
        </div>
    )
}

export default BussinessCard