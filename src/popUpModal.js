


export default function popUpModal() {
    const darkenedBackground = document.createElement("div");
    darkenedBackground.id = "darkenedBackground";

    const modal = document.createElement("div");
    modal.id = "popUpModal";

    darkenedBackground.appendChild(modal);

    return darkenedBackground;
}