class SelectScrenn {

    get selecionarAppium() {
        {return $('id:00000000-0000-0319-ffff-ffff00000070')}
    }

    async GoToClick() {
        this.selecionarAppium.click();
    }

}
module.exports = new SelectScrenn()