import Contact from "./pages/contact.vue";
import Gallery from "./pages/gallery.vue";
import Home from "./pages/home.vue";

const  routes=[
    {path: "/",component:Home},
    {path: "/contact",component:Contact},
    {path: "/gallery",component:Gallery}
]
export default routes;