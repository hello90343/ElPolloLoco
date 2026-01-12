class DrawableObject {
    img; // welches Bild es nutzt (img)
    imageCache = {}; // Cache speichert die Bilder im voraus
    currentImage = 0; // Position im imageCache -> playAnimation
    x = 120; // wo ist es
    y = 380; // wo ist es
    height = 150; // wie groß es ist (width, height)
    width = 100; // wie groß es ist (width, height)

    // Nur ein Bild wird geladen. Ohne Animationen
    loadImage(path) {
        // Im Gegensatz zu <img> wird es anders erzeugt
        //<img> HTML-Tag
        this.img = new Image();
        // Im <img> den src setzten, also <img src="./img1.png">
        this.img.src = path;
    }

    draw(ctx) {
        try {
        // Zeichnung der Objekte (Basis)
        ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
        } catch (e) {
            console.warn('Error laoding image', e);
            console.log('Could not load image', this.img.src);
        }
    }

    drawFrame(ctx) {
    // Rand an jedem Objekt
    // Ob man Character oder Chicken ist
    // instanceof prüft, aus welcher Klasse ein Objekt stammt.
    // Wenn drawFrame() bei einem Character oder Chicken aufgerufen wird,
    // wird der Rahmen angezeigt. Bei allen anderen Objekten nicht
    // – auch wenn sie dieselbe Methode aufrufen.
/*     if(this instanceof Character || this instanceof Chicken) {
          // Ab hier zeichne ich etwas Neues
          // Man braucht ctx.beginPath(), damit jede Zeichnung für sich allein steht.
          ctx.beginPath();  
          ctx.lineWidth = "5";
          ctx.strokeStyle = "blue";
          // legt ein Rechteck im aktuellen Zeichenpfad fest.
          ctx.rect(this.x, this.y, this.width, this.height);
          // stroke() macht den Linienrand sichtbar.
          ctx.stroke();
        } */
    }

        /**
     * Kommentar Bereich
     * {Datentyp}
     * arr - welcher Datentypen 
     * // Für Objekte, Arrays, Variablen, ...
     * // statt param, kann man return, module, prop(Eigenschaft), todo(Was noch zu machen ist) verwenden
     * @param {Array} arr - ['img/image1.png', 'img/image2.png', ...]
     */
    // Innerhalb einer Methode kann man eine Variable mit let oder const deklarieren.
    // Die Bilder werden geladen und im Array gespeichert. Für die Performance
    loadImages(arr) {
        // Bilder vorladen
        arr.forEach((path) => {
            	// •	new Image() → JavaScript-Bild im Speicher, unsichtbar, für Canvas & Games
	            // •	<img> → HTML-Element, sichtbar, für Webseiten & Layout
            let img = new Image();
            img.src = path;
            //  "images/logo.png": "images/logo.png"
            // Grund: Performance
            // key und value in einem Objekt
            this.imageCache[path] = img;
        });
    }
}