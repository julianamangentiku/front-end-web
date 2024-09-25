const Header = () => {
    return(
        <header className="header">
            <h1>Buat Header Menggunakan JSX</h1>
            <p>tutorial JSX Sederhana</p>
        </header>
    );
};

const Table = () =>{
    return(
        <table border="1" cellpadding="10"style={{width: "100%", textAlign: "center"}}>
            <thead>
                <tr>
                    <th>Nama</th>
                    <th>Gender</th>
                    <th>Jurusan</th>
                    <th>WhatsApp</th>
                    <th>Alamat</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Ana</th>
                    <th>Perempuan</th>
                    <th>Informatika</th>
                    <th>082259552362</th>
                    <th>Gorontalo</th> 
                </tr>
                <tr>
                    <th>Claudia</th>
                    <th>Perempuan</th>
                    <th>Pendidikan</th>
                    <th>082259552362</th>
                    <th>Tomohon</th> 
                </tr>

            {[...Array(5)].map((_,rowIndex) =>(
                    <tr key={rowIndex}>
                        {[...Array(5)].map((_,colIndex) => (
                            <td key={colIndex}>Baris {rowIndex + 1} Kolom {colIndex +1}</td>
                        ))}
                    </tr>
                     ))};
                
            </tbody>
      </table>
    );
};

const App =() =>{
    return(
        <div>
            <Header/>
            <Table/>
        </div>
    );
};
ReactDOM.render(<App/>,document.getElementById('app'));
        
                