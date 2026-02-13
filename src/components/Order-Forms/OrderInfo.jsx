import styled from "styled-components"

const OrderInfo = (props) => {

    const { setActivePage } = props

    const Wrapper = styled.div`
    background: #FAF7F2;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    `
    const Section = styled.section`

        display: flex;
        flex-direction: column;
        font-family: Barlow;
        width: 40%;
        margin: 0 auto;
        padding-bottom: 50px;
    `
    const H1 = styled.h1`
        font-size: 22px;
        font-weight: 600;
        line-height: 29.44px;
        letter-spacing: 0;
    `
    const Div = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-top: 30px;
    `
    const Span1 = styled.span`
        font-weight: 700;    
        font-size: 28px;
        line-height: 37.47px;
        letter-spacing: 0;
    `
    const Div2 = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        line-height: 37.47px;
        color: #5F5F5F;
        gap: 50px;
    `
    const Span2 = styled.span`
        color: #5F5F5F
        font-weight: 400;      
        font-size: 16px;
        line-height: 28.8px;
        letter-spacing: 0;
        text-align: right;
    `
    const Text = styled.p`
        font-family: Barlow;
        margin-top: 20px;
        font-weight: 400;
        font-size: 16px;
        line-height: 1.8;
        color: #5F5F5F;
    `
    const Nav = styled.nav`
    display: flex;
    gap: 4px;
    padding-bottom: 30px;
`

    const ButtonMain = styled.a`
    cursor: pointer;
    fornt-family: 'Barlow';
    font-weight: 500;
    font-size: 16px;
    color: #5F5F5F
`
    const Span3 = styled.span`
    color: #CE2829;
    font-weight: 500;    
    font-size: 16px;
`  
    const Span4 = styled.span`
    color: #5F5F5F
    font-weight: 500;    
    font-size: 16px;
    `

    return (
        <Wrapper>
            <Section className="order-info">
                <img src="\assets\iteration-2\pictures\form-banner.png" />
                <div>
                    <Nav className="form-navigation">
                        <ButtonMain onClick={() => setActivePage('home')} className="form-btn">Anasayfa</ButtonMain>
                        <Span4 className="form-seperate">-</Span4>
                        <Span3 className="form-active">Sipariş Oluştur</Span3>
                    </Nav>
                </div>
                <H1>Position Absolute Acı Pizaa</H1>
                <Div>
                    <Span1>85.50₺</Span1>
                    <Div2>
                        <Span2>4.9</Span2>
                        <Span2>(200)</Span2>
                    </Div2>
                </Div>
                <Text className="order-info-text">
                    Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.
                </Text>
            </Section>
        </Wrapper>
    )

}

export default OrderInfo