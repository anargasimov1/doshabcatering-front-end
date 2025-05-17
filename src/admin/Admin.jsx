

export const Admin = () => {

    let token = "eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6W3siYXV0aG9yaXR5IjoiVVNFUiJ9XSwic3ViIjoiYW5hci5nYXNpbW92Ljg5QGdtYWlsLmNvbSIsImlhdCI6MTc0NzM5NzA4NCwiZXhwIjoxNzQ3NDExNDg0fQ.SaMtxht6-bdbkxS-Dc7VRb0pv2FaZjSvGBsYFtrH7ykyJ2iowTcUm-l7HXSxrBYGe_Gw1eCfPNfOXaliuwLtdg"

    const apis = () => {

        fetch("http://localhost:8080/swagger-ui/index.html", {
            method: "GET",
            headers: {
                // "Content-Type":"application/json",
                "Authorization": "Bearer " + token
            }
        }).then(r => {
            if (r.ok) {
                alert("yes")
                // window.location.href = "http://localhost:8080/swagger-ui/index.html"
            }
        })
    }

    return (
        <div>

            <button onClick={() => apis()}>apiler bax</button>
        </div>
    )
}
