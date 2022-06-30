'use strict'

const e = React.createElement

class KlipfolioDashboard extends React.Component {

    componentWillMount() {
        let script = document.createElement('script');
        script.setAttribute('id', 'klipfolioEmbed');
        script.onload = function() {
            let newScript = document.createElement('script');
            let inlineScript = document.createTextNode('KF.embed.embedKlip({profile : "74eea255c5385cf4f6acfd1255d522d3ba5cc1e2",settings : {"width": 1141,"theme":"light","borderStyle":"square","borderColor":"#cccccc"},title : "Awesome Dashboard" });');
            newScript.setAttribute('id', 'klipfolioDashboard');
            newScript.appendChild(inlineScript); 
            document.getElementsByTagName('head')[0].appendChild(newScript); 
        };
    
        script.src = "https://embed.klipfolio.com/a/js/embed.api";
        document.getElementsByTagName('head')[0].appendChild(script);
    }
    
    componentWillUnmount () {
        let klipfolioEmbed = document.getElementById('klipfolioEmbed');
        let klipfolioDashboard = document.getElementById('klipfolioDashboard');
        if (klipfolioEmbed && klipfolioDashboard) {
            klipfolioEmbed.remove(); 
            klipfolioDashboard.remove();
        }
    }
    render() {
        return (
            e( 'div', { id: 'kf-embed-container-your-kilpfolio-container-key' } )
        );
    }
}

const dashboardContainer = document.getElementById('dashboard');
ReactDOM.createRoot(dashboardContainer).render( e( KlipfolioDashboard ) );