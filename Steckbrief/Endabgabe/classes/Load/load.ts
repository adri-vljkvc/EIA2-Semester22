namespace GardenSimulation {
    export class Load {
        static carotS: HTMLImageElement;
        static carotM: HTMLImageElement;
        static carotB: HTMLImageElement;

        static melonS: HTMLImageElement;
        static melonM: HTMLImageElement;
        static melonB: HTMLImageElement;

        static radishS: HTMLImageElement;
        static radishM: HTMLImageElement;
        static radishB: HTMLImageElement;

        static salatS: HTMLImageElement;
        static salatM: HTMLImageElement;
        static salatB: HTMLImageElement;

        static sellerieS: HTMLImageElement;
        static sellerieM: HTMLImageElement;
        static sellerieB: HTMLImageElement;

        static tropfenS: HTMLImageElement;
        static tropfenM: HTMLImageElement;
        static tropfenB: HTMLImageElement;

        static fertilizS: HTMLImageElement;
        static fertilizM: HTMLImageElement;
        static fertilizB: HTMLImageElement;

        static bug: HTMLImageElement;

        static empty: HTMLImageElement;

        // Funktion zum Laden von den Inhalten, Bildern usw.
        static loading(): void {
            Load.carotS = <HTMLImageElement>document.getElementById("Karotte_klein");
            Load.carotM = <HTMLImageElement>document.getElementById("Karotte_mittel");
            Load.carotB = <HTMLImageElement>document.getElementById("Karotte_groß");

            Load.melonS = <HTMLImageElement>document.getElementById("Melone_klein");
            Load.melonM = <HTMLImageElement>document.getElementById("Melone_mittel");
            Load.melonB = <HTMLImageElement>document.getElementById("Melone_groß");

            Load.radishS = <HTMLImageElement>document.getElementById("Radieschen_klein");
            Load.radishM = <HTMLImageElement>document.getElementById("Radieschen_mittel");
            Load.radishB = <HTMLImageElement>document.getElementById("Radieschen_groß");

            Load.salatS = <HTMLImageElement>document.getElementById("Salat_klein");
            Load.salatM = <HTMLImageElement>document.getElementById("Salat_mittel");
            Load.salatB = <HTMLImageElement>document.getElementById("Salat_groß");

            Load.sellerieS = <HTMLImageElement>document.getElementById("Sellerie_klein");
            Load.sellerieM = <HTMLImageElement>document.getElementById("Sellerie_mittel");
            Load.sellerieB = <HTMLImageElement>document.getElementById("Sellerie_groß");

            Load.tropfenS = <HTMLImageElement>document.getElementById("WasserEins");
            Load.tropfenM = <HTMLImageElement>document.getElementById("WasserZwei");
            Load.tropfenB = <HTMLImageElement>document.getElementById("WasserDrei");

            Load.fertilizS = <HTMLImageElement>document.getElementById("ferti1");
            Load.fertilizM = <HTMLImageElement>document.getElementById("ferti2");
            Load.fertilizB = <HTMLImageElement>document.getElementById("ferti3");
            
            Load.bug = <HTMLImageElement>document.getElementById("Pesti");

            Load.empty = <HTMLImageElement>document.getElementById("Empty");
        }
    }
}