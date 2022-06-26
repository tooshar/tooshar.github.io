var granimInstance = new Granim({
    element: '#canvas-image-blending',
    direction: 'radial',
    isPausedWhenNotInView: true,
    image: {
        source: './img/trees.jpg',
        blendingMode: 'multiply',
        stretchMode: ['stretch', 'stretch']
    },
    states: {
        "default-state": {
            gradients: [
                ['#000000', '#ffffff'],
                ['#29323c', '#485563'],
                ['#FF6B6B', '#556270'],
                ['#5f3d08', '#896937'],
                ['#38761d', '#82af6f']
            ],
            transitionSpeed: 7000
        }
    }
});