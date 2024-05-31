import './styles.css';
import { Viewer } from '@/photo-sphere-viewer/core';
import { MarkersPlugin } from '@/photo-sphere-viewer/markers-plugin';

const baseUrl = 'https://photo-sphere-viewer-data.netlify.app/assets/';

const viewer = new Viewer({
    container: 'viewer',
    panorama: baseUrl + 'sphere.jpg',
    caption: 'Parc national du Mercantour <b>&copy; Damien Sorel</b>',

    plugins: [
        [MarkersPlugin, {
            markers: [
  {
    "id": "marker-6g08w6jm72b",
    "image": "https://photo-sphere-viewer-data.netlify.app/assets/pictos/pin-red.png",
    "position": {
      "yaw": 5.433,
      "pitch": -0.079
    },
    "size": {
      "width": 32,
      "height": 32
    },
    "anchor": "bottom center",
    "tooltip": {
      "content": "Lectern",
      "position": "top left",
      "trigger": "hover"
    }
  }
]
});

const markersPlugin = viewer.getPlugin(MarkersPlugin);

viewer.addEventListener('ready', () => {
    viewer
        .animate({
            yaw: 0,
            pitch: 0.5,
            speed: 1000,
        })
        .then(() => {
            markersPlugin.showMarkerTooltip('custom-tooltip');
        });
}, { once: true });