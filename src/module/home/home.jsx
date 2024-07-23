import "./home.css";
import homeImg2 from "../../assets/imgs/home2.jpg";
import ImgsChange from "module/common/imgs-change/imgs-change";
import MasonryLayout from "module/common/masonry/masonry";

const Home = () => {
  const introImgs = [
    "https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.6435-9/87330921_1582613591907645_1416140310508994560_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f798df&_nc_eui2=AeEBNvtTm-EhQrJUuyynMgIfSIJemsDGnk1Igl6awMaeTY0UQxV5M1nPIprhkAxMZdFL3Pqxxn-whzIToqtHPX56&_nc_ohc=RtQ0d4RfKJIQ7kNvgFqhCdG&_nc_ht=scontent.fsgn2-6.fna&oh=00_AYAQUkF9WFzy_hrZRwSnZbM-bmhb9vHbSTWlawASSvAITA&oe=66C692BF",
    "https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.6435-9/94378943_1638709392964731_9059445435952791552_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=dd6889&_nc_eui2=AeFulvR83DgZxXBRNISYJ56xWe1f7owmRG1Z7V_ujCZEbdGGF9iO1kAmx2_EzBXS1aclSjIp75UpsssDjBvm4aKc&_nc_ohc=Z0-15qIG7N0Q7kNvgG04D7M&_nc_ht=scontent.fsgn2-4.fna&oh=00_AYB0k_zIOLUM5O14-Oj4D50m_E9ZGj65dISLMPnPE_Dgjg&oe=66C6A0FC",
    "https://scontent.fsgn2-7.fna.fbcdn.net/v/t1.6435-9/177658800_1974456999389967_4098596475974449686_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=dd6889&_nc_eui2=AeEubvZoC8yr3YqATS4EH-8FxgTErWnPzJHGBMStac_MkTI1oJ8s6MY9Objm12DkOn3_7yr9_Qts25tV0_DNIBmE&_nc_ohc=QC1kwfrNrVUQ7kNvgHGYoIM&_nc_ht=scontent.fsgn2-7.fna&oh=00_AYCuY5ra20HZifdi0PUROistvYQGTwi_BmSDC9ZEkXWrTg&oe=66C682D8",
    "https://scontent.fsgn2-11.fna.fbcdn.net/v/t39.30808-6/409224746_2724862054349454_6985155242371615238_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF9FE8Yv1K81H4LromGf92OkKAcKQZKTqqQoBwpBkpOqpeSHmCwHfFgjdth9shBv-OCPPAgQMe6NhZc1musJ6n3&_nc_ohc=84A7GsMJnpIQ7kNvgEjX_ZJ&_nc_ht=scontent.fsgn2-11.fna&oh=00_AYAjG1VdUTTASN9esEhFrmjoTLoJVaG52wvf-odaT_FUxg&oe=66A50BF2",
  ];

  const gallery = [
    "https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/449790849_2879369355565389_5504128634357550759_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEvpe-JpDW6KRrvQ6yUq_h_qh74WUyyRGKqHvhZTLJEYqXvez59g9XYjxjE3M-gQnjOazhKBE_dJ1J2Y_R6oFtQ&_nc_ohc=QHVwejTVwXYQ7kNvgElvptl&_nc_ht=scontent.fsgn2-7.fna&oh=00_AYDoMB06q9XfXJeX6M4akzdoLRH3IyntjNgNRpgc6N_Hww&oe=66A4EC78",
    "https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/449816340_2879369342232057_2601252234409026348_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGtTv5_5J_8ACT3xF4wE3JXv_sQx9ULkm-_-xDH1QuSb7NjSQ1NhUK-OxXZ0QZ9fs7F0RV2csRnAL3dY-_9cnZA&_nc_ohc=yLKngOYtTGYQ7kNvgFM6G2T&_nc_ht=scontent.fsgn2-4.fna&oh=00_AYAbOfEfgULfGscEHIlKedFIoNqtUD9Dy5p1zLWHZN4xDg&oe=66A50E31",
    "https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/449791400_2879369312232060_538030841760776205_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGWn5cvJlibWa_fiUp3ZVlU-b7G4UDTQEz5vsbhQNNATKMhUVDBVtkQSPqer3zuuFxEknEUeX_m6-Bx6WCB56kG&_nc_ohc=zVWnkyMv8mUQ7kNvgH9iiuH&_nc_ht=scontent.fsgn2-6.fna&oh=00_AYClm2fEcPODo8ExHpJDuYFuZ_2HcVEequ5TY3_Ephvf1w&oe=66A52111",
    "https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/449791642_2879369292232062_5376914491069192851_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHhqtXC_nJhrGUSMvj5Kzdr6PKWVQPw7T_o8pZVA_DtP2QnoXGm3xdsxkylMcBPRoCdF1JVD4pkCkUgDg-x-jyj&_nc_ohc=xxFHbBnoMCMQ7kNvgG_ofmv&_nc_ht=scontent.fsgn2-5.fna&oh=00_AYBKf8ResNvhpf59tnrJ2TyTpyesVbAS0Flg78miuT6TZQ&oe=66A50560",
    "https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/409293233_2724862247682768_2310471390500599923_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGTyD9WtPXzx37MZ-Ki2acWqdVtcua_e6Op1W1y5r97o5WC7aIeit0dcnPrwJ4kQmE3R1sXqOjE81yxLMGLycMM&_nc_ohc=f4KI2-8ReKoQ7kNvgHfn8If&_nc_ht=scontent.fsgn2-6.fna&oh=00_AYBZRa04RZGrbjtyAXdsjYO0nY4u4tFKgtWkpTxvWLGARA&oe=66A4F16A",
    "https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/385433896_2676577215844605_6881545298686929638_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFeESY9o2D2wtNWQa7OEIodPwIx9BSOYwU_AjH0FI5jBUaqJQy9d__GdFBJMHXnkpMkHgbx_Bok6dQS6cpaKsFg&_nc_ohc=Kk1_9qRYJYsQ7kNvgFlWoMv&_nc_ht=scontent.fsgn2-9.fna&oh=00_AYBfXmsszyyJC5WPSkNgU-18-yX0LmAC2ygxTcrMTDFz1g&oe=66A4FDD2",
    "https://scontent.fsgn2-10.fna.fbcdn.net/v/t39.30808-6/248051314_2130311240471208_1526663039329476080_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFeZ3TpyNJpHOET215hdIxqAtFA_Wb4y2wC0UD9ZvjLbIFk9YAmRe7U4ei_myZTSOZXA3scnCUFVX2QmuWqJvRZ&_nc_ohc=KOJPe2OjVlUQ7kNvgGnYWwN&_nc_ht=scontent.fsgn2-10.fna&oh=00_AYC5awuUbXHaXDiDf62RJmle10ySMumwTHAtQpBH2RoXDA&oe=66A5140B",
    "https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/385275906_2676576652511328_308611838452117092_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFz01YUNEaxrdg3EGCUtDo9C3jsGXJ6Z3oLeOwZcnpnepQv2W5yUI-xD3tUj2XABLlUuk4V6YKVTHK9v2DyAiEt&_nc_ohc=ilnVGm1QSR0Q7kNvgFDqqOR&_nc_ht=scontent.fsgn2-6.fna&oh=00_AYCHvOnu480nUiPy3unGOrHHtacNaFi_HqVvQhv-qIW8Ag&oe=66A51952",
    "https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/249052785_2130311060471226_2614388139889823374_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFBv65f_fPO62WuXknpp4rAo3_MklP-w8mjf8ySU_7Dyc70qkgEhHK6HL_ENHVnLXHNoIEcUTY3DMHf90ZN6u3d&_nc_ohc=xOpF7WEJ1dcQ7kNvgGEsHhy&_nc_ht=scontent.fsgn2-7.fna&oh=00_AYBXOpaJxUan_B446Hb00VLT4vgYqWB8HMgbhsvgu_AjfQ&oe=66A4F4CC",
    "https://scontent.fsgn2-10.fna.fbcdn.net/v/t39.30808-6/383004244_2676576322511361_1839834564019549786_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG_1cv6ZDgGcbqKFUsv0ExgsEUWINqm0YuwRRYg2qbRizuiSdKOXp8khs3_YKeKupgSx2Jejbc7aarAIWK2LQqg&_nc_ohc=txpI3_QjGHsQ7kNvgHS0t5l&_nc_ht=scontent.fsgn2-10.fna&oh=00_AYBUIJxQEo6YdhhoNGA255pApBrMRRXI_d8YF7XR1afefQ&oe=66A51A13",
    "https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/310295139_2396757800493216_5157550948083811127_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeE3ZC5qwOuhU6JajDD0BnF_TLdNXbdS7gdMt01dt1LuB0ccLBBbAF5EmqA_PP55xU_27L4suJgxPoZN9ZUuyA5f&_nc_ohc=e8iaEa3kgyEQ7kNvgHTLrj7&_nc_ht=scontent.fsgn2-7.fna&oh=00_AYAW90ZQWPdIglpOANWopnhMNFEXTRV_AIWpVf7XVPTPWA&oe=66A517DB",
    "https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/269820824_2163960330439632_9027032204838235845_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFIEJK1kyU2YhMf2Qwl6eRiQ6llE3jLb3RDqWUTeMtvdEajHMM3DHyZxCA3sK3QyyX-mgOTa8zK12xwZg7tJges&_nc_ohc=c4NvcoaC-2kQ7kNvgEOefMC&_nc_ht=scontent.fsgn2-7.fna&oh=00_AYCpPW8jYayhvfDykv-OKTxnS6QSat1kUsKTis-CUWIxsw&oe=66A505CF",
    "https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/270011996_2163960127106319_4045333769403099337_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGdfvaGr5AyxF4OrpbALU4vD-YEkAmpzvcP5gSQCanO93r0oMVGy4m0OQObjuVpmcRbXKupZBSkUlns77hP5g1x&_nc_ohc=fbuqaOck8xwQ7kNvgG9zr2b&_nc_ht=scontent.fsgn2-9.fna&oh=00_AYA22jENrYoPCSF90bxjiFpjKe2UYWaBkzDTFMdY-pj10A&oe=66A5033C",
    "https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/239761801_2091189757716690_724676651501335464_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF39IM_lf9C8yyl53JYk90yTzEos-F1kI1PMSiz4XWQjXYgyOw_6TMtUSA6DJ849iVNcuzvztK0dZurRaqZ_JZM&_nc_ohc=nl1LenHn43UQ7kNvgGsZMDk&_nc_ht=scontent.fsgn2-7.fna&oh=00_AYAg_dxsh6mEg-1LHxz1wfC-KWT9J60fr9-mt-_gR3WEKQ&oe=66A4EFD2",
    "https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/219994670_2038446942990972_541473981107100130_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeEPJLcFuX6W8NWFc1AHCAWfTJtOq9TPDIdMm06r1M8Mhw5YjURRVlILZqIPWQ3uGK4t3TcGOL2dRO0AEIAP9ubG&_nc_ohc=G94obaWLJrYQ7kNvgG3ETId&_nc_ht=scontent.fsgn2-6.fna&oh=00_AYCfb0ZyCrBBNUWU-0sC6FdYP8ARMbyC-3WOOWNLdEIHiw&oe=66A5034B",
    "https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/242379523_2091187467716919_1612663022149642772_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEFDOr79_tPEKuk2QOjY4nfwFz6RB4YirXAXPpEHhiKtUHxy9JOiNPd6vzmpGpFHADsrdamOmvnfyju-w9-bJYZ&_nc_ohc=ceUeAhRdAZoQ7kNvgHtUJ_D&_nc_ht=scontent.fsgn2-8.fna&oh=00_AYCI38XX_uno45-TbKY9GWwofqBEe8gAiEtnGJPORoZGyA&oe=66A51361",
    "https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/219886356_2038446739657659_7417693376815630058_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeHGeL-GsQ460Kj81fSqneK2y6sDbDM5LNPLqwNsMzks08Z-Wob0SacdaCOfDhg179a0be8VYCEQsjou8jaEozR8&_nc_ohc=apcf5n907LMQ7kNvgGZk36-&_nc_ht=scontent.fsgn2-6.fna&oh=00_AYCTMnkg3GDjsJzrAofRDMv_d5eOrGUEfrR71sLB8P0x2w&oe=66A51F74",
    "https://scontent.fsgn2-7.fna.fbcdn.net/v/t1.6435-9/177658800_1974456999389967_4098596475974449686_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=dd6889&_nc_eui2=AeEubvZoC8yr3YqATS4EH-8FxgTErWnPzJHGBMStac_MkTI1oJ8s6MY9Objm12DkOn3_7yr9_Qts25tV0_DNIBmE&_nc_ohc=QC1kwfrNrVUQ7kNvgHGYoIM&_nc_ht=scontent.fsgn2-7.fna&oh=00_AYDkFlzwvPe4Zwhxeh7fe0qXxolTfy_Q6yTeKbms13YldA&oe=66C6BB18",
    "https://scontent.fsgn2-9.fna.fbcdn.net/v/t1.6435-9/94725430_1638710036298000_6342491734873735168_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=dd6889&_nc_eui2=AeFcrVA24To2ZDNEmZjTMXWfMnVQcUthc30ydVBxS2FzffY41XItGyuKG2Hqy8sRwuYPuyXkUwgm9AKEkPHN8xMs&_nc_ohc=Lme5Z80Ep7cQ7kNvgFRaiSp&_nc_ht=scontent.fsgn2-9.fna&oh=00_AYBGzzHIQ_8OW6-JC2Mq7DNpNdxEouRSfx6Jof6a50g6og&oe=66C6AC85",
    "https://scontent.fsgn2-9.fna.fbcdn.net/v/t1.6435-9/85260528_1582613831907621_3964736653704036352_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=f798df&_nc_eui2=AeHcH3z8JbS6b0xTl8EoO2EopxOH9I3o2SanE4f0jejZJiHMCUmqg9yE7GcRie2StmVBFWzX8Kw0CS4AsrBRpFbu&_nc_ohc=o8F1GpK8ARMQ7kNvgEvUhqj&_nc_ht=scontent.fsgn2-9.fna&oh=00_AYD0OKCO-vTxefgBBOWwKhBvKQKXlGSL0LMU7UHvSoj3NQ&oe=66C6BB95",
  ];

  return (
    <div className="container home">
      <section id="home" className="intro">
        <div className="left">
          <h1>RIN DESIGN</h1>
          <p>
            We transform spaces into inspiring interiors. <br /> Let us bring
            your vision to life.
          </p>

          <a href="#services" className="btn">
            Discover Our Services
          </a>
        </div>
        <div className="right">
          <h2>LET'S MAKE YOUR DREAM COME TRUE</h2>
          <ImgsChange
            images={introImgs}
            time="3000"
            className="img-front"
          ></ImgsChange>

          <img className="img-behind" src={homeImg2} alt="homeImg2" />
        </div>
      </section>
      <br />
      <hr />
      <section id="services" className="services">
        <h2>Our Services</h2>
        <div className="service-item">
          <img
            src="https://scontent.fsgn2-10.fna.fbcdn.net/v/t39.30808-6/383004244_2676576322511361_1839834564019549786_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG_1cv6ZDgGcbqKFUsv0ExgsEUWINqm0YuwRRYg2qbRizuiSdKOXp8khs3_YKeKupgSx2Jejbc7aarAIWK2LQqg&_nc_ohc=txpI3_QjGHsQ7kNvgHS0t5l&_nc_ht=scontent.fsgn2-10.fna&oh=00_AYBUIJxQEo6YdhhoNGA255pApBrMRRXI_d8YF7XR1afefQ&oe=66A51A13"
            alt="Service 1"
          ></img>
          <h3>Residential Design</h3>
          <p>Customized interior design solutions for homes and apartments.</p>
        </div>
        <div className="service-item">
          <img
            src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.6435-9/178910332_1974457022723298_4191336312491723789_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=dd6889&_nc_eui2=AeEDkN8CuUk1_g768qaF2Zob6EtXrBq41hLoS1esGrjWEnqQe2_yabHPAIMXOO6GzkpsYgJ1bonAILjez-_8QbB7&_nc_ohc=n-RU4HbLLtIQ7kNvgHwEgUT&_nc_ht=scontent.fsgn2-3.fna&oh=00_AYAyPnp-rhukAzpTuwxdgc-7gX1zkodepCpFQcB_RH6QxA&oe=66C6ABD4"
            alt="Service 2"
          ></img>
          <h3>Commercial Design</h3>
          <p>
            Functional and aesthetic design for coffee shop, offices, retail
            spaces, and more.
          </p>
        </div>
      </section>

      <section id="portfolio" className="portfolio">
        <h2>Portfolio</h2>
        <div className="gallery-carousel">
          <img
            src="https://scontent-iad3-1.xx.fbcdn.net/v/t39.30808-6/355531254_2100070666828599_1296159382674134360_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=nAy1VDrUnhYAX-Vb9Uw&_nc_ht=scontent-iad3-1.xx&oh=00_AfDNGaHd4DHJpb1UXTm_vWwBoKphOj7F2B7_5U5p4MSoSA&oe=64E3B8E7"
            alt="Interior Design"
          />
        </div>
        <h2>Gallery</h2>
        <div className="gallery">
          <MasonryLayout items={gallery}></MasonryLayout>
        </div>
      </section>
    </div>
  );
};

export default Home;
