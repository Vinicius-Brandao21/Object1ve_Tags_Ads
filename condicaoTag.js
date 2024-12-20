export function getDados() {
    const propsUrl = [
        { url: "https://ovicio.com.br/", adUnit: "/7542/parceiros/ovicio" },
        { url: "https://muramasa.com.br/", adUnit: "/7542/parceiros/muramasa" },
        { url: "https://conexaoplaneta.com.br/", adUnit: "/7542/parceiros/ConexaoPlaneta" }
    ];

    const propsUrlOBJ = Object.fromEntries(propsUrl.map(propsUrl => [propsUrl.url, propsUrl]));

    const UrlProcurada = "https://muramasa.com.br/"; //Usar o "Window.location.hostname" como url procurada dinamica

    let resultadoBusca = propsUrlOBJ[UrlProcurada];

    return (resultadoBusca);

}
