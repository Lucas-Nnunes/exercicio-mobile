describe('Atividade', () => {
    
    it('Acessar e preencher o menu forms', async () => {
        await $('~Forms').click()
        expect(await $('~text-input')).toBeDisplayed()
    });
});