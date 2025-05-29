const banners = document.getElementById('banner');
const atajos = document.getElementById('atajo');
const tePuedeInteresar = document.getElementById('tePuedeInteresar');
const recomendaciones = document.getElementById('recomendacion');
const alimentosybebidas = document.getElementById('alimentosBebidas');
const saludymedicamentos = document.getElementById('saludMedicamentos');


class Banner {
  constructor(srcImagen, altImagen){
    this.srcImagen = srcImagen;
    this.altImagen = altImagen;
  }
}

class Atajo {
  constructor(srcImagen, altImagen, titulo){
    this.srcImagen = srcImagen;
    this.altImagen = altImagen;
    this.titulo = titulo;
  }
}

class Recomendacion {
  constructor(srcImagen, altImagen, descuento, texto){
    this.srcImagen = srcImagen;
    this.altImagen = altImagen;
    this.descuento = descuento;
    this.texto = texto;
  }
}

class Producto {
  constructor(srcImagen, altImagen, descuento, titulo, precioAhora, precioAntes, precioDelivery, tiempoDelivery, texto = '') {
    this.srcImagen = srcImagen;
    this.altImagen = altImagen;
    this.descuento = descuento;
    this.titulo = titulo;
    this.precioAhora = precioAhora;
    this.precioAntes = precioAntes;
    this.precioDelivery = precioDelivery;
    this.tiempoDelivery = tiempoDelivery;
    this.texto = texto;
  }
}

let generarBannersPost;
let guardarBanners = [
  new Banner('https://lh3.googleusercontent.com/4DwNqSzBNYOTjI9Cr-zCVX3f9zA7Q2pBjRys2St6_e33z6WTcQRq0pg3bLSbtEC00mYlyak54cvQ1nu3iZnlAdy6zyhC1Qu2pCCet3bCmBwJZhex8g=s1350-rw', 'Banner 2'),
  new Banner('https://lh3.googleusercontent.com/sqdM6TYbJtL7fM9kVb4MZDf7w6WhKIfoysi1OEghZAPw2mlc5GmpLOfqMLQEdS3Dd1WzpYyV0gvIrrgPptjMVCcN_3FKNevs4ry8aFbeqvmYsAxN=s1350-rw', 'Banner 3'),
  new Banner('https://lh3.googleusercontent.com/M7lCZhph6jeE273U4NXKeoTRG0Hcsb6yaAIs8uUii-_3GKAOV5NHA070FDebooTF955KaazcRfSaOM6wxocpZ1xBpx0OT2AdxcyACTunzjQh4nM=s1350-rw', 'Banner 4'),
  new Banner('https://lh3.googleusercontent.com/QZuBSTzLBKmCr7KF_umMhUj1HDF7k1NHyz5weUQ37L1rTBCPxqYhebId14d8OLReOtM0n9QKFjN7uZx4JY69JGf-Y7bgjD2HqERuIdkVCvm5Qyye=s1350-rw', 'Banner 5'),
  new Banner('https://lh3.googleusercontent.com/aYCJ0m6f17zY7DS3fPi88jrnw3AUq8vZH1zBqYWSP6dPdPngzNgSbwLZL584jukrWhBgCi6S3VL4M4MZ-OXwHMxm8i_4_ON7X6U_eZ6X4TIYKXk=s1350-rw', 'Banner 6'),
  new Banner('https://lh3.googleusercontent.com/6fGlW0IClm09p4pXhK_xm0zWloT03nAEYbTto7EaAQF0mHrB_npVy4znuLGZsaVzJsP7-zo_m7DZCqo8TI2LKH3_LJJfi4AtkvLX910zHa1kt7gj=s1350-rw', 'Banner 7'),
  new Banner('https://lh3.googleusercontent.com/zUKnwrs_PBm-n8wGpivqt4JRdRQ1Vju8y0kL_4x-7lLk_nmNz2TawXRAN6Imapfi5PgjEZ7NFvEyN7_Qr7ZpKVniRaObg5vGi1vr4msDZKVR3eg=s1350-rw', 'Banner 8'),
  new Banner('https://lh3.googleusercontent.com/XCkOYf4xNu-jhb9oA4yz14YUMehCdqmgYM7uAP_Lhi7QKk8qQK9hxby-TGpWgAXIBsLR6CYwboh6AM2uyTOJjXzWsYG3KUBUE6L2dJjmxu8evIhm=s1350-rw', 'Banner 9'),
  new Banner('https://lh3.googleusercontent.com/mWwqkjCZ-Xw7pU84VX-hexzu8S0mh2cJ8r8BIEanElPLQ9-ruGIMHVT_U79Was0TkycJN8_1BsLe43E5wGfgeYeIy7RHpy89adaBdHVetkknmo_I=s1350-rw', 'Banner 10'),
  new Banner('https://lh3.googleusercontent.com/I5Z_Vm47gabVqrlwftC4hUlb3-5vyBeTsyi_H7LE6lxRzCazZhMqllah-FaCA8l4ZyLTFboDUwEXxZvwmde56LIkhn4TWVEOaDO2RDygRW1T5F9p=s1350-rw', 'Banner 11'),
  new Banner('https://lh3.googleusercontent.com/iRzoepM6kCeoqDYN1zUMooTdZxsU0LX71g3LNLXWgUSqv5CDcOp6g_BYV6KTFuxGwpk3MefzT9biA921VrSNZIPVTLQqlacE-4VYnKgW1-Ugy9srhA=s1350-rw', 'Banner 12')
]

let generarAtajosPost;
let guardarAtajos = [
  new Atajo('https://lh3.googleusercontent.com/BvPPkgy0-fVGs9b7AXXlgWpS0_uV21w3wZVmSEUQDTlJHldLysYE2NR_Ls1Nu2UvlDa-V21_E7WizZtUfh6QS7t5ousCSZKbRZD0P5JkQAK9SYCfEg=s250', 'Atajo 2', 'Folleto Super Precio'),
  new Atajo('https://lh3.googleusercontent.com/VHge_3w9_sUGoot5E-NNSBx6jYah15_NbXWhmf3f--h9GKu2iGmjfxxW49q8j4iypVJbsEteFIRWWD1BzGEiEMVU1QzSIY35fmzI8Li1MEz_bqY=s250', 'Atajo 3', 'Pagos y Recargas'),
  new Atajo('https://lh3.googleusercontent.com/853WYKF4r1PPjjz3zWaaGYpLUo_oCsVcAKMlLgXpA6HPyo-qzAfCxNO1YHhJy-ZBsopL4grIctSyMkHKNUpNqxzX7aV3_V8ufk5OFBOmG3zy47o=s250', 'Atajo 4', 'Cesta bienestar'),
  new Atajo('https://lh3.googleusercontent.com/CcRsW4IrSs5VUkBUn0564qv4-aZQI3Tk3IwAh3a6R5e4z6yeifZT-GvdbYZv_RIuTS10ygD2ShWxut0YbIh4bmaLHRxOGTzHVsuoGBqi0FvPPRQ=s250', 'Atajo 5', 'Prograna Cuidamos Tu Salud'),
  new Atajo('https://lh3.googleusercontent.com/W_Hh8OGyWOlUmQ6hcgKoDaReBel3GPVNND9FPJ1Np4TtabJIGoXIXOLZKnK2AzT-fq5qsAk9bWtLfT7jnogKjSTG7LwCuxpfI3zwL5kmBGranJd8RQ=s250', 'Atajo 6', 'Equipos Medicos'),
  new Atajo('https://lh3.googleusercontent.com/Kk8V_22PaqCgSn_9Z-UEyE9kQyN6wM1_sFxtHtkYdqZ3FyUWMKuPg7LaTmBf_7KGv_XzTcOsFthCQfc2n89Jvqa6L_54Zt1UIaJM7XjBX4uENkg=s250', 'Atajo 7', 'Ubicar Farmacias'),
  new Atajo('https://lh3.googleusercontent.com/9cAoMGos2BFyBMEAMVxanQgau2ybrjiryOmeuYU6JMOr9aMyY-Z0QoFqzp-PB_JYZX56a2ypfyGGBKpgycp4Cumx4qtIEaNsUq0pDl6r-yj0bXJd=s250', 'Atajo 8', 'Farmatodo Delivery'),
  new Atajo('https://lh3.googleusercontent.com/3YAW50oObX5y1_iKEJp2SHPEQedCQAtF6At-l0MIM4XFgpjGCXywJob66Xm3NeRapKC0XfRdhKu9P9QfMMSkB14Oa27b2_54I6YbJWxTzQtEl0HN=s250', 'Atajo 9', 'Marca Farmatodo')
]

let generarInteresarPost;
let guardarInteresar = [
  new Recomendacion('https://lh3.googleusercontent.com/Kph5YfI4h0VND69Xgpf_l7sKZV5S2Za5izE634mEOCn3ciX4-qvTAWcKubWiSGqxM2qGM0voqM6iis5IQjU_-zCVjXJMKNT9ryKcdlrt7SyLOiY=s650', 'Interes 2', '0', 'Cesta de Bienestar a menos de REF 0,99'),
  new Recomendacion('https://lh3.googleusercontent.com/KSuJjyRzaBsEMoB7LQHzuhluTZdjcfNbzp2ZpDNHnOx3dPtXQiBOMMBVkDA-JVSj56ubIv3lOgo-tz9bfSGfl2RiLd8W4bwfENSV4__NUeOxLy6P=s650', 'Interes 3', '30', 'Hasta 30% Dcto. en Cuidado Bucal'),
  new Recomendacion('https://lh3.googleusercontent.com/1-RTTDlBnulzeIXi_Md0utfg_gFLGT-D93zzL_B6dywzrpAFW_0sglYPVE6hhdot1x0YhlOEuGS1X-y-q9-JsjZtsfD8ng9XvijO7rr8kvUi0YR9Uw=s650', 'Interes 4', '20', '20% Dcto. en Cetaphil'),
  new Recomendacion('https://lh3.googleusercontent.com/_geNBKOhMP8L1xk2aNEqTheHacBA3BVj2PnLlSDy_hKD1Vcjo9xt5iv0xn6fLmE1dJBjI56rg91szsn9f4E3bWt4f59NB0GWAXBDtlfbfzYsc5Vc=s650', 'Interes 5', '20', 'Hasta 20% Dcto. en Higiene Personal'),
  new Recomendacion('https://lh3.googleusercontent.com/7dcLTPVt-vKfwg2EG7zNb5aC2D38G6bJyFaoVSHcWQ7P7UhlMKoobXLGZ7K0Gs5yIHQXE_Dc52AARq-bzoKAKvCWcaDAq8zQDSVUXqcKqaJdD2c=s650', 'Interes 6', '20', 'Hasta 20% Dcto. en Vitaminas'),
  new Recomendacion('https://lh3.googleusercontent.com/-yBZxwHjtMkJJs5yadMfnV5r_eozQ8RfbprRej7JwyBEgiQQnHt_xUeWzIHXg0HHYkTAndiRimG7uMJIZBBKjY4xHjPL8EfdsD5C8QbGPMnhyEQ=s650', 'Interes 7', '25', 'Hasta 25% Dcto. en Cuidado del Cabello'),
  new Recomendacion('https://lh3.googleusercontent.com/cH6UQzsZZXZOCeVcwtUhrvUt3TiI4sv_d1rRiP9MzzE5ioMafYOvye8dlzGNvg7teXJp_dRsD34X_pTW5yQ89Kyodh6AH_WnblVdOGIW1nrUlHoPyQ=s650', 'Interes 8', '30', 'Hasta 30% Dcto. en Bebidas'),
  new Recomendacion('https://lh3.googleusercontent.com/xhopFMr15OFqS9RDUaGoA13t_O-pw9eVK_cKOBndkwgtL4dlQPLA6aLfHsia6weR1wpKNcsSx6KHeMJoQ-7lAIH9CubKucrvaglAn2VprY9n8O0=s6500', 'Interes 9', '0', 'Cesta de Bienestar Calox menos de REF'),
  new Recomendacion('https://lh3.googleusercontent.com/kWGfLI0l49mPUNN3KHE6VSvYUG3-QOaVffGiatGvL6H_ELlJYY_JZp20ahHRLjoqC6hbydPbmZ76PWHklsqTJc3H46D1utb4tqowBkYdaNf251EA=s650', 'Interes 10', '30', 'Hasta 30% Dcto. en Analgésicos'),
  new Recomendacion('https://lh3.googleusercontent.com/C0rHF2kUVTjqAyWXfT-z_oT84zjYfXspVo3X84li9nb_8rDeBdLVg9n9CH-YYsK2GNlMuCtJoelrvuKIwi76m7WQnANHaqrdY5ddDiA6jEt0ZXjQ=s650', 'Interes 11', '15', '15% Dcto. en Nestea')
]

let generarRecomendacionesPost;
let guardarRecomendaciones = [
  new Recomendacion('https://lh3.googleusercontent.com/szz_zGBxkM0zpAPIT0SUTKvImYwnFHKEUTc8wCklCKj2jjz-lRJ_SszBP75Eps3f3-O7e0w0vjHZXnpyod1dZJNgaOSyQ85p8ERjaIrUn5OgJKws=s650', 'Recomendacion 1', '', 'Afeitadoras Schick'),
  new Recomendacion('https://lh3.googleusercontent.com/hXkJdcETTeDm3CSuCOMUbBVpz0cAnmRZ1VRSV2_xBf1593lId_WmpbOSpzGkGHVAF5HVZUXc4h9B7uR1sG6EElzSQWn726CBY4JA3q_maayGO6RIrQ=s650', 'Recomendacion 2', '', 'Festal Calox Caja 10 Grageas'),
  new Recomendacion('https://lh3.googleusercontent.com/0WVrMK20CPpj_1hG6Zx9mQ3KiPeFbfkwDJPb-hiP9L4heBpRUqbBA85CjVxvhSGn-oUCwIA_rP_49DdOow136r5WTeEUtIegokb1aRpA6crGLSmf=s650', 'Recomendacion 3', '', 'Probióticos Women´s Probiotic Now 20 Billion'),
  new Recomendacion('https://lh3.googleusercontent.com/UcNvhTAsoaNMNY22vPYR-4tCkzT3yfQR3kmMIXnvHTn_qwfCYUDgokk9AyA6MdjdBHbiqzs8yLJO7Mfd7YwR_Yevb-KPiYPAG0QSg_6B1p8-4Qo=s650', 'Recomendacion 4', '', 'Inositol 500 mg Now Frasco x 100 Cápsulas'),
  new Recomendacion('https://lh3.googleusercontent.com/qJe3MKV2jGeYhbYRUenccQTtQDWvxUsVeYrwN7ZiZ08nIPpnoWsrZ2ViBCHDpgybU2IRMLWBrmj0nDQT1Bi1n3MUMYJBuRDcMxoBhC3GIgB5VtY=s650', 'Recomendacion 5', '', 'Aceite de Onagra Evening Primrose Oil'),
  new Recomendacion('https://lh3.googleusercontent.com/pz2g10geTFBbsvkRyXZLuQ1xBjFNDkwtEHQKn-06nTETuVxjoL_Ov9OKid9bq29Hu6hmtOcOrpKsolqBH7IRLKWDEW1U8q3gd8pvCV-qGtBpk4x9=s650', 'Recomendacion 6', '', 'Vitamina A 10.000 IU Now 100 Cápsulas'),
  new Recomendacion('https://lh3.googleusercontent.com/u3ku_PXyOmh_cqdnqVjPMZqJwgjUigwcJYN90UNFp6o6roEdGgeTCXJhJ29BLYfJ74HOFl-zYcq2dE9GYHDazHL0CTk6n5Y7DB3u7-jccx4bv0TO=s650', 'Recomendacion 7', '', 'Chocolate Carré Avellanas 100gr'),
  new Recomendacion('https://lh3.googleusercontent.com/PgHmWFsjb0SSimmT6BX3T-RzBOaQV1tEefq9Q4YP_jsO9_pzl0agFenBmEIx6fEkuQRXmV5t5hsQN6HbQJLjrpE2mlN1TGw88vpGpa75NMN_4io=s650', 'Recomendacion 8', '', 'Productos Ponds Age Miracle'),
  new Recomendacion('https://lh3.googleusercontent.com/lh6OysrobpOH5pI7z6pksUxf7xraI2ASDN0EcDV-7IgRnZQlcy48PGWVSEJQ4zwQVwHLXJz3S8yeZPtERShVziI-63-0kEhGL3VFJT-uyP4y9no=s650', 'Recomendacion 9', '', 'Snack Papas Pringles'),
  new Recomendacion('https://lh3.googleusercontent.com/WzVLxZcvi6BL1t1E5uyt04uWJPhLefti-UBAZQeT_j94mtwszTsdALilOw7ipszy9LG_WX3PFm16oi76iei3gMSJRzDZk6UdItC4mLXzHNMeWE7E=s650', 'Recomendacion 10', '', 'Jabón En Barra Palmolive Mandarina ')
]

let generarAlimentosyBebidasPost;
let guardarAlimentosyBebidaspost = [
  new Producto('https://lh3.googleusercontent.com/3xL-StjsdZFgcAg-t6Ao5nIMx0wZVtawxCcbaq1ko2BZDI_kBBi99epd9Q3IM1rXmf3S5IGlVOxHh91TP4shHAIwdFNiNSN-l1UxGRplXU1yGD_L=s650', 'Producto 2', '22', 'Refresco Pepsi Cola 2 L', 'Bs.125.18', 'Bs.160.49', 'Mililitros a Bs.0.06', '35'),
  new Producto('https://lh3.googleusercontent.com/Wyl24_DiZOWTzDLZJpkfa9e1JMp_Ftrmwcf1ocX2ePa1TkX92HfWyICucRn2H4GKGSU7bvls49JdW9tJMfA9TjN40X81BSUgpywEovNLYZHm4M8=s650', 'Producto 3', '0', 'Galleta De Chocolate Savoy Samba Fresa X 32 Gr', 'Bs.85.00', '', 'Gramos a Bs.2.66', '35'),
  new Producto('https://lh3.googleusercontent.com/a3MFG90wvaHF2ZE6zPEDTkOlVeSVSMfEPwp9BM2S3yH34mmMyWv2Ieuqs57v9yGCn-os2fdn5hzGSYLpGiAB7i9kNq9tl-uf0YKgKcmEYZil8Pai=s650', 'Producto 4', '0', 'Refresco Coca-cola Sabor Original 1 Lt', 'Bs.94.02', '', 'Mililitros a Bs.0.09', '35'),
  new Producto('https://lh3.googleusercontent.com/zLC5F8MDW8Jc8TLRnoMAmOnwhsiKueRkpF2lu5rZxxEsYnx76_5KHsEAZtMdZ4OuFUr25ODONDOOK4QRCwSKVW4lrB17hNhm-8GFNbCv0CnhyO3cQw=s650', 'Producto 5', '0', 'Snack Doritos Mega Queso 150gr', 'Bs.310.00', '', 'Gramos a Bs.2.07', '35'),
  new Producto('https://lh3.googleusercontent.com/wqa52NF9ZOUeyfRDJ3CIIoRuGlHfVIi9FUt6CHn6eSN1gr48wpqyC4H14TEdV5zemBqiN9Yt6YcRit1LeJ1jC5kITKkANnrfT18WDeBFTxS74Ws=s650', 'Producto 6', '19', 'Refresco Coca-cola Sabor Original 1,5 Lt', 'Bs.107.69', 'Bs.132.95', 'Mililitros a Bs.0.07', '35'),
  new Producto('https://lh3.googleusercontent.com/pTlh1dmbfEL0oQdm5WH9zg2mSsVkzQ4MPAAWpkQyPyS4PS7aow4e830nbuTA5HxCZezdc7L6S3oSyJ_ErNnzfdlgX2t3s4HnSY4rhWf5YAkwv7w=s650', 'Producto 7', '15', 'Galletas Oreo Tipo Americano Tubo', 'Bs.117.19', 'Bs.137.87', 'Unidades a Bs.117.19', '35'),
  new Producto('https://lh3.googleusercontent.com/acnDNGJaEEdWhGoEWJqYyxc1O6tUyE5fHSWl4usAycXTscC0s07K-HRN5R4LNvOE84eG2D4oLqBcu2ZfGxM0SXUKtODu8g0tcxQtsAQyNuCHV7TvEA=s650', 'Producto 8', '0', 'Agua Minalba Tapa Rosca 600ml', 'Bs.95.00', '', 'Mililitros a Bs.0.16', '35'),
  new Producto('https://lh3.googleusercontent.com/c8QcCkXIHbXWc8gbpFMIHQh069q8Whs_fSgMeh50nvHOLQbBgxmxB6pPoOrRr8G6LCOoPjjP27XiS9moJKaGq6ruCnWxhSjdJnanBYRK5KLvfrPHag=s650', 'Producto 9', '15', 'Agua Nevada 600 Ml', 'Bs.58.11', 'Bs.68.37', 'Mililitros a Bs.0.10', '35'),
  new Producto('https://lh3.googleusercontent.com/V3ml4Yrlm8pvFGdDm1FEPcp9A3Bkfd0eaXG5BqoUYBmlWrHoWW-2y5K9n7S562CCAfY5ATBMn1UQzBDlrJktwmIerC8dVHrUK8VN2AeO-zgR82E7FQ=s650', 'Producto 10', '0', 'Snack Cheese Tris 150gr', 'Bs.191.50', '', 'Gramos a Bs.1.28', '35')
]

let generarSaludyMedicamentosPost;
let guardarSaludyMedicamentospost = [
  new Producto('https://lh3.googleusercontent.com/l5dnDoFwdpR_vu-CtwjgBWIwAUFqclSBPBTsCBFXtnydo_azJsEutsSaGH2AruvkSt7TLtxjiLn1UDcT2Mn5MNL5pmAmHTfvZeNyVLR5YGy-Dr1E=s650', 'Producto 12', '15', 'Gasa Esteril Algobap 4"x4" X2und', 'Bs.13.98', 'Bs.16.45', 'Unidades a Bs.13.98', '35', 'Solo DELIVERY - 15% Dcto. 1era Compra'),
  new Producto('https://lh3.googleusercontent.com/z0Od-lEjBSnbdGLx9ZlaOF2fD7ectuCdmFdcCPnlFS9wIZiKhZ2OQBK9iPDf5D453CQXGQmstbGJ_5trPNijarGf07vBIHbE_sCDkEvhmTWWcssr=s650', 'Producto 13', '15', 'Gasa Esteril Algobap 3"x3" X2und', 'Bs.10.67', 'Bs.12.55', 'Unidades a Bs.10.67', '35', 'Solo DELIVERY - 15% Dcto. 1era'),
  new Producto('https://lh3.googleusercontent.com/apIQW3vuzakj9LdcOe_UGohzxSQBQc44xZLT52eklVkg7hI7tsDKr3ipKweWUUpevwVWNmrzcO3euBvkoXc3Ngd0nmGIdpcE5UQE5AvujAFM1w=s650', 'Producto 14', '20', 'Acetaminofén 650 Mg La Santé Caja X 10', 'Bs.47.16', 'Bs.58.95', 'Unidades a Bs.4.72', '35', '¡Aprovecha!'),
  new Producto('https://lh3.googleusercontent.com/srrVa6p6Cv_lRXioVpvrSlD9NK-9GpZlCXzfRLKJ9b2RUmUnk48g33jADcy7croXhYYFMk0osNu3WRwIvkkBJIFWwBYtZ8scz-9td1DKyKgBSBI=s650', 'Producto 15', '15', 'Diclofenac Potásico 50 Mg Genven Caja X 10', 'Bs.32.13', 'Bs.37.80', 'Otro a Bs.1.07', '35', 'Solo DELIVERY - 15% Dcto. 1era'),
  new Producto('https://lh3.googleusercontent.com/O81B0y4DK-fG8lzBokbdCwrhhiRCzuPuRmNJXvqaK_7PtqiD4QxtS78XKNLJRjacc9XHbMTa2FopXsVbPrqlmgYknDNxXzNF5OwCn_FSRE_oFyS0jA=s650', 'Producto 16', '15', 'Gasa Sobre 4x4 Procare. X2und', 'Bs.21.08', 'Bs.24.80', 'Unidades a Bs.21.08', '35', 'Solo DELIVERY - 15% Dcto. 1era Compra'),
  new Producto('https://lh3.googleusercontent.com/RainQbxvoJU8ztoetxoKHhBOwqWlRBo0IQoFtohwv333tRaKSeLfv2wpPaca3nAHRjvlAHuJ0nkC1in9Fse917R5I8XbO5J3TsEecWMkdRNVuH1mHQ=s650', 'Producto 17', '15', 'Vitamina C 500 Mg La Santé X 10 Tabletas', 'Bs.82.75', 'Bs.97.35', 'Unidades a Bs.5.99', '35', 'Solo DELIVERY - 15% Dcto. 1era'),
  new Producto('https://lh3.googleusercontent.com/BysUOnw4ZVhAk_MkBZP6KzxwUZmmS3QJ69ktSLnPlJTS9UbtqUIqmCfUxIs_UwgDj2OdaSF9VWV4Xn7AOcyfqsw1cy3JuM7_t3yQJO4B-UJ741iK=s650', 'Producto 18', '15', 'Gasa Esteril Algobap 2"x2" X2und', 'Bs.5.99', 'Bs.7.05', 'Unidades a Bs.5.99', '35', 'Solo DELIVERY - 15% Dcto. 1era'),
  new Producto('https://lh3.googleusercontent.com/GnYyQ5FrzJ0N-SC8xA8Uga3gZE_W1wZmVu_ZlmbI1kUpUqr37QQopZvZsPQKADS8x1ZK5UoLdT2bzfJOrkKSVxkTES5lZtRDDes46gCy_ldmEBJ3=s650', 'Producto 19', '15', 'Gasa Estéril 4x4 12', 'Bs.15.68', 'Bs.18.45', 'Unidades a Bs.7.84', '35', 'Solo DELIVERY - 15% Dcto. 1era'),
  new Producto('https://lh3.googleusercontent.com/h3ejm-QO40m7YNuRly_yGzzJZ5KaZJnZE-YLMFaOahV1zwWJnNaIdbUrKOivixbglQOJpfFqIRyXbBPctkc0HckpKXMd99YDkcAwjBhu9CUYjEJ0=s650', 'Producto 20', '15', 'Acetaminofén 650 Mg Atamel Forte Calox C', 'Bs.149.90', 'Bs.176.35', 'Otro a Bs.14.99', '35', 'Solo DELIVERY - 15% Dcto. 1era')
]

function iniciar(){
  generarBanners();
  generarAtajos();
  generarInteresar();
  generarRecomendados();
  generarAlimentosyBebidas();
  generarSaludyMedicamentos();
}

function generarBanners() {
  guardarBanners.forEach((informacion) => {
    generarBannersPost = `
      <img width="100%" class="img-banner" src="${informacion.srcImagen}" alt="${informacion.altImagen}">
    `
    banners.innerHTML += generarBannersPost;
  });
}

function generarAtajos() {
  guardarAtajos.forEach((informacion) => {
    generarAtajosPost = `
      <div class="w-[120px] flex flex-col items-center flex-shrink-0">
        <img width="80" height="80" src="${informacion.srcImagen}" alt="${informacion.altImagen}">
        <p class="text-[0.8rem] text-[#848484] text-center">${informacion.titulo}</p>
      </div>
    `
    atajos.innerHTML += generarAtajosPost;
  });
}

function generarInteresar() {
  guardarInteresar.forEach((informacion) => {
    generarInteresarPost = `
      <div class="card-teinteresa">
        <img width="100%" class="producto-teinteresa" src="${informacion.srcImagen}" alt="${informacion.altImagen}">
        <a href="#">
          <img src="https://www.farmatodo.com.ve/assets/svg/arrow-right-white.svg" alt=">">
        </a>
        <div class="descuento-teinteresa">
          <img width="100%" src="./src/img/icon-discount-yellow.svg" alt="icon discount">
          <span>${informacion.descuento}%</span>
        </div>
        <div class="div-teinteresa-texto">
          <p>${informacion.texto}</p>
        </div>
      </div>
    `
    tePuedeInteresar.innerHTML += generarInteresarPost;
  });
}

function generarRecomendados() {
  guardarRecomendaciones.forEach((informacion) => {
    generarRecomendacionesPost = `
      <div class="card-teinteresa">
        <img width="100%" class="producto-teinteresa" src="${informacion.srcImagen}" alt="${informacion.altImagen}">
        <a href="#">
          <img src="https://www.farmatodo.com.ve/assets/svg/arrow-right-white.svg" alt=">">
        </a>
        <div class="div-teinteresa-texto">
          <p>${informacion.texto}</p>
        </div>
      </div>
    `
    recomendaciones.innerHTML += generarRecomendacionesPost;
  });
}

function generarAlimentosyBebidas() {
  guardarAlimentosyBebidaspost.forEach((informacion) => {
    generarAlimentosyBebidasPost = `
      <div class="card-productos-2">
        <div class="card-productos-top">
          <img class="img-producto" src="${informacion.srcImagen}" alt="${informacion.altImagen}">
          <a href="#">
            <img src="./src/img/sdf-icon-plus.svg" alt="icon plus">
          </a>
          <div class="descuento-teinteresa">
            <img width="100%" src="./src/img/icon-discount-yellow.svg" alt="icon discount">
            <span>${informacion.descuento}%</span>
          </div>
          <div class="div-aprovecha">
            <p>¡Aprovecha!</p>
          </div>
          <img width="18px" class="corazon-producto" src="./src/img/heart.svg" alt="heart">
        </div>
        <div class="card-producto-bottom">
          <p class="card-producto-titulo">${informacion.titulo}</p>
          <p class="card-producto-precio"><span class="precio-ahora">${informacion.precioAhora}</span><span class="precio-antes"><del>${informacion.precioAntes}</del></span></p>
          <div class="div-delivery">
            <p>${informacion.precioDelivery}</p>
            <div>
              <img width="20px" src="./src/img/moto.svg" alt="moto">
              <p>${informacion.tiempoDelivery} mins</p>
            </div>
          </div>
        </div>
      </div>
    `
    alimentosybebidas.innerHTML += generarAlimentosyBebidasPost;
  });
}

function generarSaludyMedicamentos() {
  guardarSaludyMedicamentospost.forEach((informacion) => {
    generarSaludyMedicamentosPost = `
      <div class="card-productos-2">
        <div class="card-productos-top">
          <img class="img-producto" src="${informacion.srcImagen}" alt="${informacion.altImagen}">
          <a href="#">
            <img src="./src/img/sdf-icon-plus.svg" alt="icon plus">
          </a>
          <div class="descuento-teinteresa">
            <img width="100%" src="./src/img/icon-discount-yellow.svg" alt="icon discount">
            <span>${informacion.descuento}%</span>
          </div>
          <div class="div-aprovecha">
            <p>¡Aprovecha!</p>
          </div>
          <img width="18px" class="corazon-producto" src="./src/img/heart.svg" alt="heart">
        </div>
        <div class="card-producto-bottom">
          <p class="card-producto-titulo">${informacion.titulo}</p>
          <p class="card-producto-precio"><span class="precio-ahora">${informacion.precioAhora}</span><span class="precio-antes"><del>${informacion.precioAntes}</del></span></p>
          <div class="div-delivery">
            <p>${informacion.precioDelivery}</p>
            <div>
              <img width="20px" src="./src/img/moto.svg" alt="moto">
              <p>${informacion.tiempoDelivery} mins</p>
            </div>
          </div>
        </div>
      </div>
    `
    saludymedicamentos.innerHTML += generarSaludyMedicamentosPost;
  });
}

window.addEventListener('load', iniciar);