window.onload = () => {
    const vid = window.location.href.split("url=")[1];

    new DPlayer({
        container: document.getElementById('dplayer'),
        autoplay: true,
        video: {
            url: vid,
            type: 'hls',
        },
        pluginOptions: {
            hls: {
            },
        },
    });
} 