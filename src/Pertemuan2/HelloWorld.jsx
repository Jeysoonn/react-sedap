export default function HelloWorld(){

    const propsUserCard = {
        nama: "Goku",
        nim: "2355301088",
        tanggal: "2025-03-12"
    }

    return (
        <div>
            <h1>Hello World</h1>
            <p>Selamat Belajar React</p>
            <GreetingBinjai/>
            <QuoteText/>
            <UserCard
                nama = "Jason" 
                nim = "2355301088"
                tanggal = {new Date().toLocaleDateString()}
            />   
            <UserCard {...propsUserCard}/>  

            <img src="img/daun.jpg" alt="logo" />      
        </div>
    )
}

function GreetingBinjai (){
    return (
        <small>Salam dari Binjai</small>
    )
}

function QuoteText(){
    const text = "Mulutmu Harimaumu";
    const text2 = "Aku ingin jadi macam";
    return (
        <div>
            <hr/>
            <p>{text.toLowerCase()}</p>
            <p>{text2.toLowerCase()}</p>
        </div>
    )
}

function UserCard(props){
    return (
        <div>
            <hr/>
            <h3>Nama : {props.nama}</h3>
            <p>NIM : {props.nim}</p>
            <p>Tanggal: {props.tanggal}</p>
        </div>
    )
}

