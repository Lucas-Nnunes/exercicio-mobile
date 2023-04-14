const SelectAppium = require("../screens/SelectAppium");


describe('Atividade', () => {
    
    it('Acessar e preencher o menu forms', async () => {
        await $('~Forms').click()
        await $('~text-input').setValue('Lucas Oliveira')  
        await $('~Dropdown').click()
        
        await SelectAppium.GoToClick()
        
        expect(await $('~text-input')).toBeDisplayed()
        
    });
});