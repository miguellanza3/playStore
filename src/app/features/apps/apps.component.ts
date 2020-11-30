import { Component } from '@angular/core'

    @Component({
        selector: 'app-cmp',
        templateUrl: "./app.component.html",
        styleUrls: ['./app.component.scss']
})

export class ApplicationComponent {
    appDetail: any;
    appsModel: any = {
        apps: [
            {
                name: "Whatsapp",
                manufacturer: "Whatsapp Inc.",
                linkImg: "https://play-lh.googleusercontent.com/bYtqbOcTYOlgc6gqZ2rwb8lptHuwlNE75zYJu6Bn076-hTmvd96HH-6v7S0YUAAJXoJN=s180-rw",
                description: "WhatsApp Messenger es una aplicación de mensajería GRATUITA, disponible para Android y otros teléfonos inteligentes. WhatsApp usa la conexión a Internet (4G/3G/2G/EDGE o Wi-Fi) de tu teléfono"
            },
            {
                name: "TikTok Lite",
                manufacturer: "TikTok PTE.ltd.",
                linkImg: "https://play-lh.googleusercontent.com/LLUZLIcA7MbM5yLwAA-oTAt3q5kdDjIIfrEqR2mGLAxvVJcwruxJYQChwPDahLvSjFc=s180-rw",
                description: "TikTok es una comunidad global de videos cortos. Con esta app podrás descubrir, crear y editar videos increíbles, y compartirlos fácilmente con tus amigos y el mundo entero. Crea y edita videos al instante usando filtros especiales, stickers divertidos y mucho más."
            },
            {
                name: "HBO GO",
                manufacturer: "HBO Digital Latin America LLC",
                linkImg: "https://play-lh.googleusercontent.com/Za8sA9umDTAsGSe0oAsPhPe-qt3rh6dNvuU-m_Sc3sJVLHttpSfrle-2e2XRxM86F6s=s180-rw",
                description: "Con HBO GO®, disfruta de las películas más recientes y taquilleras, documentales y contenido para toda la familia, así como también de los episodios de todas las temporadas de las series más"
            },
        ]
    }
    viewAppDetail(app:any):void{
        this.appDetail = app;
    }


}