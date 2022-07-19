var GardenSimulation;
(function (GardenSimulation) {
    class Load {
        // Funktion zum Laden von den Inhalten, Bildern usw.
        static loading() {
            Load.carotS = document.getElementById("Karotte_klein");
            Load.carotM = document.getElementById("Karotte_mittel");
            Load.carotB = document.getElementById("Karotte_groß");
            Load.melonS = document.getElementById("Melone_klein");
            Load.melonM = document.getElementById("Melone_mittel");
            Load.melonB = document.getElementById("Melone_groß");
            Load.radishS = document.getElementById("Radieschen_klein");
            Load.radishM = document.getElementById("Radieschen_mittel");
            Load.radishB = document.getElementById("Radieschen_groß");
            Load.salatS = document.getElementById("Salat_klein");
            Load.salatM = document.getElementById("Salat_mittel");
            Load.salatB = document.getElementById("Salat_groß");
            Load.sellerieS = document.getElementById("Sellerie_klein");
            Load.sellerieM = document.getElementById("Sellerie_mittel");
            Load.sellerieB = document.getElementById("Sellerie_groß");
            Load.tropfenS = document.getElementById("WasserEins");
            Load.tropfenM = document.getElementById("WasserZwei");
            Load.tropfenB = document.getElementById("WasserDrei");
            Load.fertilizS = document.getElementById("ferti1");
            Load.fertilizM = document.getElementById("ferti2");
            Load.fertilizB = document.getElementById("ferti3");
            Load.bug = document.getElementById("Pesti");
            Load.empty = document.getElementById("Empty");
        }
    }
    GardenSimulation.Load = Load;
})(GardenSimulation || (GardenSimulation = {}));
//# sourceMappingURL=load.js.map