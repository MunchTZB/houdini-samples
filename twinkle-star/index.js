registerPaint('particle', class {
    static get inputProperties() {
        return [
            '--particle-item',
            '--particle-count',
            '--particle-frequency'
        ];
    }

    paint(ctx, geom, properties) {
        console.log(123);
    }
});