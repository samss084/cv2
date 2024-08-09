'use client';


import { useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const search = useSearchParams();
  const animation = search.has('animation');
  const [active, isActive] = useState(false);
  const [modalMesage, setmodalMessage] = useState(``);
  const DEFAULTTAB = 'main';
  const [mode, setMode] = useState('');
  const tab = [
    {
      id: 'main',
      title: 'Main Menu',
    },
    {
      id: 'projects',
      title: 'Projects',
    },
    {
      id: 'FAQ',
      title: 'Frequently Asked',
    },
  ];
  const navigate = [
    {
      id: 1,
      label: 'Info',
      onClick: () => {
        isActive(true);
        setmodalMessage(`The Website you see here is 80% made out of css using no library other than tailwind css. The sun and the grid below you are entirely made
          out of Css, you can check it through the source code (of the original file) if you want. I specialize at implementing figma designs into
          real life website using react and plain css (tailwind is also doable to me). I also have a good sets of skills of analytical geometry to
          implement any kind of exciting design you have. I'm fully responsible and also able to complete certain task on time. I hope that i'm able
          to bring fasilkom's website into a new level of creativity. Sincerely, thank you in advance for your attention`);
      },
      tab: 'main',
    },
    {
      id: 2,
      label: 'Projects',
      onClick: () => proj(),
      tab: 'main',
    },
    {
      id: 3,
      label: 'Original',
      onClick: () => window.open('https://cv-amber-two.vercel.app'),
      onMouseEnter: () => SetPSA('Warning High GPU usage because of the pure 3D css animation'),
      onMouseLeave: () => counter !== 3 && SetPSA('Use Arrows and ESCP to navigate'),
      hideOnSmall: true,
      tab: 'main',
    },
    {
      id: 4,
      label: 'Kitchen',
      onClick: () => window.open('https://catnip-rapid-warrior.glitch.me/'),
      tab: 'projects',
    },
    {
      id: 5,
      label: 'Songz',
      onClick: () => window.open('https://songs-psi-pied.vercel.app/'),
      tab: 'projects',
    },
    {
      id: 6,
      label: 'Los Angeles',
      onClick: () => window.open('https://alert-adventurous-humor.glitch.me/'),
      tab: 'projects',
    },
    {
      id: 7,
      label: 'Slippy Drippy',
      onClick: () => window.open('https://parallel-proud-scorpio.glitch.me/'),
      tab: 'projects',
    },
    {
      id: 8,
      label: 'Harmonia',
      onClick: () => window.open('https://github.com/dinovaslate/harmonia69'),
      tab: 'projects',
    },
    {
      id: 9,
      label: 'Timepicker',
      onClick: () => window.open('https://timepicker-6c3z.vercel.app/'),
      tab: 'projects',
    },
    {
      id: 10,
      label: 'Questions',
      onClick: () => {
        setMode('FAQ');
        setCounter(11);
      },
      tab: 'main',
    },
    {
      id: 11,
      label: 'Pemilihan desain',
      onClick: () => {
        setmodalMessage(`
          Alasan saya memilih desain ini adalah agar website saya berbeda dengan yang lain, menurut saya  menggunakan template yang disediakan framework akan membuat website anda tidak bisa dibedakan dengan website yang lain. Untuk sebuah website memiliki search yang bagus websitenya harus memiliki sesuatu yang unik didalamnya, dan desain merupakan kunci untama yang juga penting.  
        `);
        isActive(true);
      },
      style: {
        fontSize: '2.1rem',
      },
      tab: 'FAQ',
    },
    {
      id: 12,
      label: 'SWOT',
      onClick: () => {
        setmodalMessage(`
          <ul>
          <li>
            Strength:
            <ul>
              <li>I can implement 3D designs by using Css and Three.js (still learning)</li>
              <li>I'm able to code complex mechanism through skills that i've built from leetcode and codeforce (user:barco23)</li>
              <li>I'm persistent and will complete any mission that is tasked to me</li>
              <li>I'm good at geometry: https://www.desmos.com/calculator/kgehfhobna?lang=id</li>
            </ul>
          </li>
          <br>
          <li>
            Weakness:
            <ul>
              <li>I'm unable to create designs, i can only implement the design that has been made</li>
              <li>Sometimes, i'll prioritize academics, but i'll try to equate the tasks that are given by OH fasilkom and academics</li>
            </ul>
          </li>
          <br>
          <li>
            Opportunity:
            <ul>
              <li>I have enough money to buy courses to boost necessery skills </li>
              <li>I have a good enough setup </li>
              <li>I have flexible time at least by now</li>
            </ul>
          </li>
          <br>
          <li>
            Threats:
            <ul>
              <li>Sometimes complex designs can require more time </li>
              <li>Academics deadlines (I'll try to keep it balanced)</li>
            </ul>
          </li>
          </ul>
        `);
        isActive(true);
      },
      tab: 'FAQ',
    },
    {
      id: 13,
      label: 'Alur Design',
      onClick: () => {
        setmodalMessage(`
        Jika design tidak terlalu susah, biasanya saya langsung mengimplementasikannya ke web (coding di VS lalu debug di inspect element). Tetapi jika desain susah, saya akan mengsketsa dulu bagaimana cara implementasinya, layout apa yang akan digunakan (flex atau grid), lalu setelah pakem saya akan implementasi
        `);
        isActive(true);
      },
      tab: 'FAQ',
    },
    {
      id: 14,
      label: 'Problem handling',
      onClick: () => {
        setmodalMessage(`
          Dalam menghadapi problema saya biasanya mencoba untuk berdiskusi 
          dengan yang lain tentang keputusan yang paling optimal. Dalam berdiskusi,
          tidak harus pendapat saya yang diambil dan segala kesalahan atau kegagalan yang terjadi saya tidak menaruh kesalahannya pada pembuat keputusan melainkan tanggung jawab team 
          <br>
          Pernah suatu saat saya berdiskusi dengan team saya tentang theme yang akan dipakai untuk membuat website evoting, pendapat saya waktu itu adalah glassmorphism, tetapi keputusan yang diambil waktu itu adalah bauhaus. Dalam hal ini saya memutuskan untuk tidak memaksakan kehendak dan membantu project ini sampai selesai
          `);
        isActive(true);
      },
      style: {
        fontSize: '2.1rem',
      },
      tab: 'FAQ',
    },
    {
      id: 15,
      label: 'Spec PC',
      onClick: () => {
        setmodalMessage(`
        For those that considers this as a flex or an attempt to flex, i can clarify that this section right over here is not for flexing, yet its's here because i was asked this question when doing the interview
        <br/>
        <br/>
        Specification for Laptop:<br/>
        <ul>
          <li>CPU: Ryzen 7 5800H</li>
          <li>GPU: RTX 3070 140 Watt</li>
          <li>SSD: 1TB Gen 4</li>
          <li>RAM: 32GB DDR4</li>
          <li>Resolution: 2560x1600</li>
        </ul>
        <br/>
        Specification for PC:<br/>
        <ul>
          <li>CPU: Ryzen 9 3950x</li>
          <li>GPU: RTX 2070 Super</li>
          <li>SSD: 1TB Gen 4</li>
          <li>SSHD: 4TB 7200 RPM (10GB cache) </li>
          <li>Resolution: 3440x1440</li>
          <li>RAM: 16GB 3600Mhz</li>
          <li>Sound System: Sammsung b650 Soundbar</li>
        </ul>
        `);
        isActive(true);
      },
      tab: 'FAQ',
    },
    {
      id: 16,
      label: 'Harapan',
      onClick: () => {
        setmodalMessage(`
        My hope after i've got in is that i could build the website even further destroying any limit that the website has in order for it to launch. I hope that afterwards many students across Indonesia will look up to us even more because of how advance the skills are shown in the website. I hope that our website will rise into popularity at least in google search.
        `);
        isActive(true);
      },
      tab: 'FAQ',
    },
    {
      id: 17,
      label: 'Exit',
      onClick: () => back(),
      tab: 'FAQ',
    },
    {
      id: 18,
      label: 'Exit',
      onClick: () => back(),
      tab: 'projects',
    },
    {
      id: 19,
      label: 'Exit',
      onClick: () => back(),
      tab: 'main',
    },
    {
      id: 20,
      label: !animation ? 'No Animation' : 'Enable Anim',
      onClick: () => {
        const URL = '?animation=false';
        !animation
          ? window.location.replace(window.location.href + URL)
          : window.location.replace(window.location.href.substring(0, window.location.href.length - URL.length - 1));
      },
      tab: 'main',
    },
  ];
  const DEFAULTLINK = navigate.find((link) => link.tab === DEFAULTTAB);
  const clickedWrap = useRef();
  const clicked = useRef();
  const myVideo = useRef();
  const modal = useRef();

  const [counter, setCounter] = useState(DEFAULTLINK.id);
  const [show, setShow] = useState(true);
  const [psa, SetPSA] = useState('Use Arrows and ESCP to navigate');
  useEffect(() => {
    const handler = (e) => {
      if (e.keyCode !== 40) return;
      if (active) return;

      const nextID = navigate.find((val, idx) => {
        return val.tab === mode && idx > counter - 1;
      })?.id;

      nextID && setCounter(nextID);
    };
    document.body.addEventListener('keydown', handler);
    return () => document.body.removeEventListener('keydown', handler);
  }, [counter, mode]);

  useEffect(() => {
    const handler = (e) => {
      if (e.keyCode !== 38) return;
      if (active) return;
      const prevID = navigate.findLast((val, idx) => {
        return val.tab === mode && idx < counter - 1;
      })?.id;

      prevID && setCounter(prevID);
    };
    document.body.addEventListener('keydown', handler);
    return () => document.body.removeEventListener('keydown', handler);
  }, [counter, mode]);

  useEffect(() => {
    const handler = (e) => {
      if (e.keyCode !== 13) return;
      if (show) {
        setMode('main');
        clickedevent();
        return;
      }
      click(counter);
    };
    document.body.addEventListener('keydown', handler);
    return () => document.body.removeEventListener('keydown', handler);
  }, [counter, show, mode]);

  useEffect(() => {
    counter !== 3 ? SetPSA('Use Arrows and ESCP to navigate') : SetPSA('Warning High GPU usage because of the pure 3D css animation');
  }, [counter]);

  const click = (count) => {
    const get = navigate.find((link) => link.id === count);
    get.onClick();
  };
  const clickedevent = () => {
    setMode('main');
    myVideo.current && (myVideo.current.playbackRate = 3);
    clickedWrap.current?.classList.add('upped');
    myVideo.current?.setAttribute('style', 'filter:brightness(1.3)');
    myVideo.current?.classList.add('upped-video');
    clicked.current?.classList.add('reduce');
    setTimeout(() => {
      setShow(false);
    }, 500);
  };

  const proj = () => {
    setMode('projects');
    setCounter(4);
  };

  useEffect(() => {
    const handler = (e) => {
      if (e.keyCode !== 27) return;
      if (active) {
        isActive(false);
        return;
      }
      back();
    };
    document.body.addEventListener('keydown', handler);
    return () => document.body.removeEventListener('keydown', handler);
  }, [mode, counter, active]);

  const back = () => {
    if (mode === 'main') {
      setShow(true);
      clicked.current?.classList.remove('reduce');
      setTimeout(() => {
        myVideo.current?.classList.remove('upped-video');
        clickedWrap.current?.classList.remove('upped');
        console.log('hello');
        setMode('');
        setCounter(1);
      }, 900);
      return;
    }
    setMode('main');
    setCounter(1);
  };
  const btn = (id) => {
    setCounter(id);
    click(id);
  };
  return (
    <>
      <div className={`modal-wrap custom invisible`}>
        <div className="modal text-justify">This website requires landscape screen orientation please rotate your phone and refresh the website</div>
      </div>
      <video autoPlay muted loop id="myVideo" ref={myVideo}>
        <source src="/video.mp4" type="video/mp4" id="srca" />
      </video>
      <div className="vignette absolute w-screen h-screen"></div>
      <svg className={`square ${animation ? 'noanimation' : ''} ${!show && 'd-none'}`}>
        <polygon points="250,60 100,400 400,400" className="triangle" />
        Sorry, your browser does not support inline SVG.
      </svg>
      <svg
        className={`text ${animation ? 'noanimation' : ''} ${!show && 'd-none'}`}
        viewBox="0 0 629 68"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M67.104 68H54.336C54.08 68 53.824 67.808 53.568 67.424L47.424 52.256H21.312L15.264 67.424C15.072 67.808 14.816 68 14.496 68H1.63201C1.50401 68 1.40801 67.968 1.34401 67.904C0.960005 67.776 0.768005 67.52 0.768005 67.136L27.072 1.376C27.264 0.991997 27.552 0.799995 27.936 0.799995H40.8C41.184 0.799995 41.472 0.991997 41.664 1.376L67.872 66.848C67.936 66.912 67.968 67.008 67.968 67.136C67.968 67.392 67.872 67.616 67.68 67.808C67.552 67.936 67.36 68 67.104 68ZM65.856 66.272L40.224 2.528H28.512L2.88001 66.272H13.92L19.968 51.104C20.096 50.72 20.352 50.528 20.736 50.528C39.104 50.528 48.352 50.592 48.48 50.72C48.672 50.848 50.816 56.032 54.912 66.272H65.856ZM58.272 62.048C58.144 62.048 57.984 62.016 57.792 61.952C57.664 61.824 50.784 44.8 37.152 10.88H31.584L11.232 61.472C11.104 61.856 10.848 62.048 10.464 62.048C10.08 61.92 9.82401 61.792 9.69601 61.664C9.63201 61.472 9.60001 61.216 9.60001 60.896L30.144 9.632C30.336 9.312 30.624 9.152 31.008 9.152C35.616 9.152 37.984 9.216 38.112 9.344C38.304 9.408 45.344 26.688 59.232 61.184C59.232 61.312 59.136 61.472 58.944 61.664C58.816 61.856 58.592 61.984 58.272 62.048ZM43.2 40.352H25.536C25.408 40.352 25.312 40.32 25.248 40.256C24.864 40.128 24.672 39.872 24.672 39.488L33.6 17.216C33.728 16.832 33.984 16.64 34.368 16.64C34.752 16.64 35.008 16.832 35.136 17.216L44.064 39.2C44.064 39.968 43.776 40.352 43.2 40.352ZM41.952 38.624L34.368 19.808L26.784 38.624H41.952ZM45.6 46.304H23.136C22.88 46.304 22.656 46.24 22.464 46.112C22.336 45.92 22.272 45.696 22.272 45.44C22.272 45.184 22.336 44.992 22.464 44.864C22.656 44.672 22.88 44.576 23.136 44.576H45.6C45.856 44.576 46.048 44.672 46.176 44.864C46.368 44.992 46.464 45.184 46.464 45.44C46.464 45.696 46.368 45.92 46.176 46.112C46.048 46.24 45.856 46.304 45.6 46.304Z"
          fill="black"
        />
        <path
          d="M131.864 68H82.4243C82.1683 68 81.9443 67.936 81.7523 67.808C81.6243 67.616 81.5603 67.392 81.5603 67.136V1.664C81.5603 1.408 81.6243 1.216 81.7523 1.088C81.9443 0.895996 82.1683 0.799995 82.4243 0.799995H94.3283C94.5843 0.799995 94.7763 0.895996 94.9043 1.088C95.0963 1.216 95.1923 1.408 95.1923 1.664V54.368H131.864C132.12 54.368 132.312 54.464 132.44 54.656C132.632 54.784 132.728 54.976 132.728 55.232V67.136C132.728 67.392 132.632 67.616 132.44 67.808C132.312 67.936 132.12 68 131.864 68ZM131 66.272V56.096H94.3283C94.0723 56.096 93.8483 56.032 93.6563 55.904C93.5283 55.712 93.4643 55.488 93.4643 55.232V2.528H83.2883V66.272H131ZM125.912 62.048H88.3763C88.1203 62.048 87.8963 61.984 87.7043 61.856C87.5763 61.664 87.5123 61.44 87.5123 61.184V7.616C87.5123 7.36 87.5763 7.168 87.7043 7.04C87.8963 6.848 88.1203 6.752 88.3763 6.752C88.6323 6.752 88.8243 6.848 88.9523 7.04C89.1443 7.168 89.2403 7.36 89.2403 7.616V60.32H125.912C126.168 60.32 126.36 60.416 126.488 60.608C126.68 60.736 126.776 60.928 126.776 61.184C126.776 61.44 126.68 61.664 126.488 61.856C126.36 61.984 126.168 62.048 125.912 62.048Z"
          fill="black"
        />
        <path
          d="M199.031 68H149.59C149.334 68 149.111 67.936 148.919 67.808C148.791 67.616 148.727 67.392 148.727 67.136V1.664C148.727 1.408 148.791 1.216 148.919 1.088C149.111 0.895996 149.334 0.799995 149.59 0.799995H197.303C197.559 0.799995 197.751 0.895996 197.879 1.088C198.071 1.216 198.167 1.408 198.167 1.664V13.568C198.167 13.824 198.071 14.048 197.879 14.24C197.751 14.368 197.559 14.432 197.303 14.432H162.359V27.584H191.255C191.511 27.584 191.703 27.68 191.831 27.872C192.023 28 192.118 28.192 192.118 28.448V40.352C192.118 40.608 192.023 40.832 191.831 41.024C191.703 41.152 191.511 41.216 191.255 41.216H162.359V54.368H199.031C199.287 54.368 199.479 54.464 199.607 54.656C199.799 54.784 199.895 54.976 199.895 55.232V67.136C199.895 67.392 199.799 67.616 199.607 67.808C199.479 67.936 199.287 68 199.031 68ZM198.167 66.272V56.096H161.495C161.239 56.096 161.015 56.032 160.823 55.904C160.695 55.712 160.631 55.488 160.631 55.232V40.352C160.631 40.096 160.695 39.904 160.823 39.776C161.015 39.584 161.239 39.488 161.495 39.488H190.391V29.312H161.495C161.239 29.312 161.015 29.248 160.823 29.12C160.695 28.928 160.631 28.704 160.631 28.448V13.568C160.631 13.312 160.695 13.12 160.823 12.992C161.015 12.8 161.239 12.704 161.495 12.704H196.439V2.528H150.454V66.272H198.167ZM193.079 62.048H155.543C155.287 62.048 155.062 61.984 154.87 61.856C154.742 61.664 154.678 61.44 154.678 61.184V7.616C154.678 7.36 154.742 7.168 154.87 7.04C155.062 6.848 155.287 6.752 155.543 6.752H191.351C191.607 6.752 191.799 6.848 191.926 7.04C192.118 7.168 192.215 7.36 192.215 7.616C192.215 7.872 192.118 8.096 191.926 8.288C191.799 8.416 191.607 8.48 191.351 8.48H156.407V60.32H193.079C193.335 60.32 193.527 60.416 193.655 60.608C193.847 60.736 193.943 60.928 193.943 61.184C193.943 61.44 193.847 61.664 193.655 61.856C193.527 61.984 193.335 62.048 193.079 62.048ZM185.303 35.072H161.495C161.239 35.072 161.015 35.008 160.823 34.88C160.695 34.688 160.631 34.464 160.631 34.208C160.631 33.952 160.695 33.76 160.823 33.632C161.015 33.44 161.239 33.344 161.495 33.344H185.303C185.559 33.344 185.751 33.44 185.879 33.632C186.071 33.76 186.167 33.952 186.167 34.208C186.167 34.464 186.071 34.688 185.879 34.88C185.751 35.008 185.559 35.072 185.303 35.072Z"
          fill="black"
        />
        <path
          d="M273.276 68H259.74C259.612 68 259.484 67.968 259.356 67.904C259.228 67.776 253.82 60.096 243.132 44.864C232.956 60.096 227.804 67.776 227.676 67.904C227.548 67.968 225.052 68 220.188 68C215.196 68 212.636 67.968 212.508 67.904V67.808C212.444 67.808 212.348 67.776 212.22 67.712C212.156 67.584 212.124 67.424 212.124 67.232C212.124 67.04 219.74 55.904 234.972 33.824L212.316 2.144C212.188 2.016 212.124 1.856 212.124 1.664C212.124 1.408 212.188 1.216 212.316 1.088C212.508 0.895996 212.732 0.799995 212.988 0.799995C221.948 0.799995 226.46 0.831995 226.524 0.895994C226.652 0.959997 232.22 8.384 243.228 23.168L258.204 1.184C258.396 0.927996 258.62 0.799995 258.876 0.799995H271.26C271.452 0.799995 271.58 0.831995 271.644 0.895994C271.964 1.024 272.124 1.28 272.124 1.664L272.028 2.144L251.196 33.824L273.948 66.656C274.076 66.784 274.14 66.944 274.14 67.136C274.14 67.392 274.044 67.616 273.852 67.808C273.724 67.936 273.532 68 273.276 68ZM271.644 66.272L249.468 34.304L249.276 33.728C249.34 33.472 256.156 23.072 269.724 2.528H259.356L243.996 25.088C243.932 25.152 243.9 25.216 243.9 25.28C243.9 25.28 243.708 25.344 243.324 25.472C243.196 25.472 243.036 25.44 242.844 25.376C242.716 25.248 237.02 17.632 225.756 2.528H214.62C229.34 23.008 236.764 33.408 236.892 33.728C236.764 34.112 229.34 44.96 214.62 66.272H226.812L242.46 42.944C242.46 42.752 242.652 42.624 243.036 42.56C243.42 42.56 243.708 42.688 243.9 42.944L260.22 66.272H271.644ZM239.676 30.848C239.42 30.848 239.164 30.72 238.908 30.464C228.668 15.552 223.484 7.936 223.356 7.616C223.356 7.296 223.452 7.072 223.644 6.944C223.836 6.816 224.028 6.752 224.22 6.752C224.54 6.752 224.764 6.88 224.892 7.136C235.132 22.048 240.316 29.664 240.444 29.984C240.444 30.304 240.348 30.528 240.156 30.656C239.964 30.72 239.804 30.784 239.676 30.848ZM224.22 62.048L223.74 61.856C223.484 61.728 223.356 61.504 223.356 61.184C223.484 60.864 235.804 42.848 260.316 7.136C260.444 6.88 260.668 6.752 260.988 6.752C261.18 6.752 261.372 6.816 261.564 6.944C261.756 7.072 261.852 7.296 261.852 7.616C261.724 7.936 249.404 25.952 224.892 61.664C224.7 61.92 224.476 62.048 224.22 62.048ZM260.988 62.048C260.86 62.048 260.732 62.016 260.604 61.952C260.476 61.824 255.356 54.432 245.244 39.776C245.18 39.712 245.148 39.584 245.148 39.392C245.148 38.816 245.436 38.496 246.012 38.432C246.268 38.432 246.492 38.56 246.684 38.816C256.668 53.408 261.724 60.864 261.852 61.184C261.852 61.312 261.788 61.44 261.66 61.568C261.596 61.696 261.372 61.856 260.988 62.048Z"
          fill="black"
        />
        <path
          d="M351.894 68H339.126C338.87 68 338.614 67.808 338.358 67.424L332.214 52.256H306.102L300.054 67.424C299.862 67.808 299.606 68 299.286 68H286.422C286.294 68 286.198 67.968 286.134 67.904C285.75 67.776 285.558 67.52 285.558 67.136L311.862 1.376C312.054 0.991997 312.342 0.799995 312.726 0.799995H325.59C325.974 0.799995 326.262 0.991997 326.454 1.376L352.662 66.848C352.726 66.912 352.758 67.008 352.758 67.136C352.758 67.392 352.662 67.616 352.47 67.808C352.342 67.936 352.15 68 351.894 68ZM350.646 66.272L325.014 2.528H313.302L287.67 66.272H298.71L304.758 51.104C304.886 50.72 305.142 50.528 305.526 50.528C323.894 50.528 333.142 50.592 333.27 50.72C333.462 50.848 335.606 56.032 339.702 66.272H350.646ZM343.062 62.048C342.934 62.048 342.774 62.016 342.582 61.952C342.454 61.824 335.574 44.8 321.942 10.88H316.374L296.022 61.472C295.894 61.856 295.638 62.048 295.254 62.048C294.87 61.92 294.614 61.792 294.486 61.664C294.422 61.472 294.39 61.216 294.39 60.896L314.934 9.632C315.126 9.312 315.414 9.152 315.798 9.152C320.406 9.152 322.774 9.216 322.902 9.344C323.094 9.408 330.134 26.688 344.022 61.184C344.022 61.312 343.926 61.472 343.734 61.664C343.606 61.856 343.382 61.984 343.062 62.048ZM327.99 40.352H310.326C310.198 40.352 310.102 40.32 310.038 40.256C309.654 40.128 309.462 39.872 309.462 39.488L318.39 17.216C318.518 16.832 318.774 16.64 319.158 16.64C319.542 16.64 319.798 16.832 319.926 17.216L328.854 39.2C328.854 39.968 328.566 40.352 327.99 40.352ZM326.742 38.624L319.158 19.808L311.574 38.624H326.742ZM330.39 46.304H307.926C307.67 46.304 307.446 46.24 307.254 46.112C307.126 45.92 307.062 45.696 307.062 45.44C307.062 45.184 307.126 44.992 307.254 44.864C307.446 44.672 307.67 44.576 307.926 44.576H330.39C330.646 44.576 330.838 44.672 330.966 44.864C331.158 44.992 331.254 45.184 331.254 45.44C331.254 45.696 331.158 45.92 330.966 46.112C330.838 46.24 330.646 46.304 330.39 46.304Z"
          fill="black"
        />
        <path
          d="M417.97 68H407.794C407.666 68 407.538 68 407.41 68C407.346 67.936 397.266 54.176 377.17 26.72V67.136C377.17 67.392 377.074 67.616 376.882 67.808C376.754 67.936 376.562 68 376.306 68H364.402C364.146 68 363.922 67.936 363.73 67.808C363.602 67.616 363.538 67.392 363.538 67.136V1.664C363.538 1.408 363.602 1.216 363.73 1.088C363.922 0.895996 364.146 0.799995 364.402 0.799995H374.962C375.282 0.799995 375.506 0.927996 375.634 1.184L405.202 41.984V1.664C405.202 1.408 405.266 1.216 405.394 1.088C405.586 0.895996 405.81 0.799995 406.066 0.799995H417.97C418.226 0.799995 418.418 0.895996 418.546 1.088C418.738 1.216 418.834 1.408 418.834 1.664V67.136C418.834 67.392 418.738 67.616 418.546 67.808C418.418 67.936 418.226 68 417.97 68ZM417.106 66.272V2.528H406.93C406.93 30.688 406.898 44.832 406.834 44.96C406.77 45.088 406.514 45.248 406.066 45.44C405.938 45.44 405.81 45.408 405.682 45.344C405.554 45.216 395.154 30.944 374.482 2.528H365.266V66.272H375.442C375.442 37.984 375.474 23.776 375.538 23.648C375.602 23.52 375.858 23.36 376.306 23.168C376.434 23.168 376.562 23.232 376.69 23.36C376.818 23.424 387.314 37.728 408.178 66.272H417.106ZM412.21 62.048H411.826L411.346 61.76L371.218 10.112V61.184C371.218 61.44 371.122 61.664 370.93 61.856C370.802 61.984 370.61 62.048 370.354 62.048C370.098 62.048 369.874 61.984 369.682 61.856C369.554 61.664 369.49 61.44 369.49 61.184V7.616C369.49 7.04 369.778 6.752 370.354 6.752C370.674 6.752 370.898 6.848 371.026 7.04L411.154 58.688V7.616C411.154 7.36 411.218 7.168 411.346 7.04C411.538 6.848 411.762 6.752 412.018 6.752C412.274 6.752 412.466 6.848 412.594 7.04C412.786 7.168 412.882 7.36 412.882 7.616V61.184L412.69 61.76L412.21 62.048Z"
          fill="black"
        />
        <path
          d="M457.793 68H434.849C434.593 68 434.369 67.936 434.177 67.808C434.049 67.616 433.985 67.392 433.985 67.136V1.664C433.985 1.408 434.049 1.216 434.177 1.088C434.369 0.895996 434.593 0.799995 434.849 0.799995C451.553 0.799995 460.033 0.831995 460.289 0.895994C466.305 1.216 471.809 2.688 476.801 5.31199C481.793 7.936 485.825 11.68 488.897 16.544C491.969 21.344 493.505 27.296 493.505 34.4C493.505 41.696 491.841 47.84 488.513 52.832C485.249 57.824 480.897 61.6 475.457 64.16C470.017 66.72 464.129 68 457.793 68ZM457.793 66.272C464.321 66.272 470.145 64.992 475.265 62.432C480.385 59.872 484.417 56.224 487.361 51.488C490.369 46.688 491.873 40.992 491.873 34.4C491.873 28 490.465 22.464 487.649 17.792C484.897 13.12 481.121 9.504 476.321 6.944C471.521 4.32 466.049 2.848 459.905 2.528H435.713V66.272H457.793ZM458.849 62.048H440.801C440.545 62.048 440.321 61.984 440.129 61.856C440.001 61.664 439.937 61.44 439.937 61.184V7.616C439.937 7.36 440.001 7.168 440.129 7.04C440.321 6.848 440.545 6.752 440.801 6.752C454.049 6.752 460.769 6.784 460.961 6.848C465.825 7.104 470.241 8.32 474.209 10.496C478.241 12.608 481.441 15.68 483.809 19.712C486.241 23.68 487.457 28.576 487.457 34.4C487.457 40.48 486.145 45.568 483.521 49.664C480.897 53.76 477.409 56.864 473.057 58.976C468.769 61.024 464.033 62.048 458.849 62.048ZM458.849 60.32C466.849 60.32 473.313 58.016 478.241 53.408C483.233 48.736 485.729 42.4 485.729 34.4C485.729 26.656 483.457 20.512 478.913 15.968C474.369 11.36 468.257 8.864 460.577 8.48H441.665V60.32H458.849ZM457.793 56.096H446.753C446.497 56.096 446.273 56.032 446.081 55.904C445.953 55.712 445.889 55.488 445.889 55.232V13.568C445.889 13.312 445.953 13.12 446.081 12.992C446.273 12.8 446.497 12.704 446.753 12.704H457.793C462.081 12.704 466.017 13.44 469.601 14.912C473.185 16.32 476.033 18.624 478.145 21.824C480.321 24.96 481.409 29.152 481.409 34.4C481.409 39.648 480.321 43.872 478.145 47.072C476.033 50.208 473.185 52.512 469.601 53.984C466.081 55.392 462.145 56.096 457.793 56.096ZM457.793 54.368C464.321 54.368 469.601 52.8 473.633 49.664C477.665 46.464 479.681 41.376 479.681 34.4C479.681 27.424 477.633 22.368 473.537 19.232C469.505 16.032 464.257 14.432 457.793 14.432H447.617V54.368H457.793Z"
          fill="black"
        />
        <path
          d="M558.956 68H509.516C509.26 68 509.036 67.936 508.844 67.808C508.716 67.616 508.652 67.392 508.652 67.136V1.664C508.652 1.408 508.716 1.216 508.844 1.088C509.036 0.895996 509.26 0.799995 509.516 0.799995H557.228C557.484 0.799995 557.676 0.895996 557.804 1.088C557.996 1.216 558.091 1.408 558.091 1.664V13.568C558.091 13.824 557.996 14.048 557.804 14.24C557.676 14.368 557.484 14.432 557.228 14.432H522.284V27.584H551.18C551.436 27.584 551.627 27.68 551.755 27.872C551.947 28 552.044 28.192 552.044 28.448V40.352C552.044 40.608 551.947 40.832 551.755 41.024C551.627 41.152 551.436 41.216 551.18 41.216H522.284V54.368H558.956C559.212 54.368 559.403 54.464 559.531 54.656C559.723 54.784 559.82 54.976 559.82 55.232V67.136C559.82 67.392 559.723 67.616 559.531 67.808C559.403 67.936 559.212 68 558.956 68ZM558.091 66.272V56.096H521.419C521.163 56.096 520.939 56.032 520.747 55.904C520.619 55.712 520.555 55.488 520.555 55.232V40.352C520.555 40.096 520.619 39.904 520.747 39.776C520.939 39.584 521.163 39.488 521.419 39.488H550.315V29.312H521.419C521.163 29.312 520.939 29.248 520.747 29.12C520.619 28.928 520.555 28.704 520.555 28.448V13.568C520.555 13.312 520.619 13.12 520.747 12.992C520.939 12.8 521.163 12.704 521.419 12.704H556.364V2.528H510.38V66.272H558.091ZM553.004 62.048H515.468C515.212 62.048 514.988 61.984 514.796 61.856C514.668 61.664 514.604 61.44 514.604 61.184V7.616C514.604 7.36 514.668 7.168 514.796 7.04C514.988 6.848 515.212 6.752 515.468 6.752H551.276C551.532 6.752 551.724 6.848 551.852 7.04C552.044 7.168 552.14 7.36 552.14 7.616C552.14 7.872 552.044 8.096 551.852 8.288C551.724 8.416 551.532 8.48 551.276 8.48H516.331V60.32H553.004C553.26 60.32 553.452 60.416 553.58 60.608C553.772 60.736 553.867 60.928 553.867 61.184C553.867 61.44 553.772 61.664 553.58 61.856C553.452 61.984 553.26 62.048 553.004 62.048ZM545.228 35.072H521.419C521.163 35.072 520.939 35.008 520.747 34.88C520.619 34.688 520.555 34.464 520.555 34.208C520.555 33.952 520.619 33.76 520.747 33.632C520.939 33.44 521.163 33.344 521.419 33.344H545.228C545.484 33.344 545.676 33.44 545.804 33.632C545.996 33.76 546.091 33.952 546.091 34.208C546.091 34.464 545.996 34.688 545.804 34.88C545.676 35.008 545.484 35.072 545.228 35.072Z"
          fill="black"
        />
        <path
          d="M627.243 68H612.075C611.819 68 611.595 67.904 611.403 67.712L597.675 50.048C596.011 50.112 592.363 50.144 586.731 50.144V67.136C586.731 67.392 586.635 67.616 586.443 67.808C586.315 67.936 586.123 68 585.867 68H573.963C573.707 68 573.483 67.936 573.291 67.808C573.163 67.616 573.099 67.392 573.099 67.136V1.664C573.099 1.408 573.163 1.216 573.291 1.088C573.483 0.895996 573.707 0.799995 573.963 0.799995H595.179C602.539 0.799995 608.395 1.952 612.747 4.256C617.163 6.496 620.363 9.504 622.347 13.28C624.331 16.992 625.323 21.056 625.323 25.472C625.323 30.016 624.235 34.144 622.059 37.856C619.883 41.568 616.619 44.512 612.267 46.688C622.699 60 627.979 66.816 628.107 67.136C628.107 67.392 628.011 67.616 627.819 67.808C627.691 67.936 627.499 68 627.243 68ZM625.419 66.272L610.347 46.88L610.155 46.304C610.155 45.984 610.315 45.76 610.635 45.632C615.051 43.648 618.315 40.928 620.427 37.472C622.603 33.952 623.691 29.952 623.691 25.472C623.691 18.56 621.483 13.12 617.067 9.152C612.203 4.736 604.907 2.528 595.179 2.528H574.827V66.272H585.003V49.28C585.003 49.024 585.067 48.832 585.195 48.704C585.387 48.512 585.611 48.416 585.867 48.416C593.035 48.416 597.099 48.384 598.059 48.32C598.187 48.32 598.283 48.352 598.347 48.416C598.475 48.416 603.179 54.368 612.459 66.272H625.419ZM579.915 62.048C579.339 62.048 579.051 61.76 579.051 61.184V7.616C579.051 7.04 579.339 6.752 579.915 6.752H593.259C610.795 6.752 619.563 12.832 619.563 24.992V25.472C619.563 31.872 617.387 36.608 613.035 39.68C608.747 42.688 602.155 44.192 593.259 44.192H585.867C585.291 44.192 585.003 43.904 585.003 43.328C585.003 42.752 585.291 42.464 585.867 42.464H593.259C601.899 42.464 608.171 41.088 612.075 38.336C615.979 35.584 617.931 31.296 617.931 25.472C617.931 19.584 615.947 15.296 611.979 12.608C608.075 9.856 601.835 8.48 593.259 8.48H580.779V61.184C580.779 61.76 580.491 62.048 579.915 62.048ZM595.659 38.24H585.867C585.291 38.24 585.003 37.952 585.003 37.376V13.568C585.003 12.992 585.291 12.704 585.867 12.704H595.179C607.083 12.704 613.035 16.736 613.035 24.8V25.472C613.035 33.984 607.243 38.24 595.659 38.24ZM595.179 36.512C600.811 36.512 604.907 35.616 607.467 33.824C610.027 32.032 611.307 29.248 611.307 25.472C611.307 18.112 606.283 14.432 596.235 14.432H586.731V36.512H595.179ZM615.435 62.048C615.371 62.048 615.243 62.016 615.051 61.952C614.923 61.888 611.339 57.312 604.299 48.224C604.171 48.032 604.107 47.84 604.107 47.648C604.107 47.456 604.171 47.296 604.299 47.168C604.491 46.976 604.715 46.88 604.971 46.88C605.291 46.88 605.515 46.976 605.643 47.168L616.107 60.704C616.235 60.896 616.299 61.088 616.299 61.28C616.299 61.472 616.203 61.664 616.011 61.856C615.819 61.984 615.627 62.048 615.435 62.048Z"
          fill="black"
        />
      </svg>
      <a className={`button ${animation ? 'noanimation' : ''} ${!show && 'd-none'}`} onClick={clickedevent}>
        Jump in
      </a>
      <div className="clicked-wrap absolute w-screen h-screen" ref={clickedWrap}>
        <div className="clicked absolute w-screen" ref={clicked}>
          <div className="vignette absolute w-screen h-screen"></div>
          <div className="bg fixed"></div>
          {tab.map(({ id, title }, index) => (
            <div className={`content absolute w-fit ${mode === id && 'active'}`} id={id} key={index}>
              <div className="title py-3 px-4">{title}</div>
              <div className="list-wrap grid-auto-flow">
                {navigate
                  .filter((links) => links.tab == id)
                  .map((link, index) => (
                    <div
                      className={`title cursor-pointer py-2 items-center list ${counter === link.id ? 'active' : ''} ${
                        link?.hideOnSmall ? 'special' : ''
                      } `}
                      id={link.id}
                      style={link.style}
                      key={index}
                    >
                      <div className="triangles"></div>
                      <div>{link.label}</div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
          <div className="psa text-white absolute">{psa}</div>
        </div>
      </div>
      {tab.map(({ id, title }, index) => (
        <div className={`content absolute w-fit hidden ${mode === id && 'active'}`} key={index} id={id}>
          <div className="title py-3 px-4">{title}</div>
          <div className="list-wrap grid-auto-flow">
            {navigate
              .filter((links) => links.tab == id)
              .map((link, index) => (
                <div
                  className={`title cursor-pointer py-2 items-center list  ${link.hideOnSmall ? 'special' : ''} `}
                  key={index}
                  id={link.id}
                  onClick={() => btn(link.id)}
                  onMouseEnter={() => link?.onMouseEnter?.()}
                  onMouseLeave={() => link?.onMouseLeave?.()}
                >
                  <div className="triangles"></div>
                  <div>{link.label}</div>
                </div>
              ))}
          </div>
        </div>
      ))}

      <div className={`modal-wrap invisible place-content-center ${active ? 'active' : ''}`} ref={modal}>
        <div className="modal text-white text-justify">
          <div className="cntn" dangerouslySetInnerHTML={{ __html: modalMesage }}></div>
          <div className="button" onClick={() => isActive(false)}>
            X
          </div>
        </div>
      </div>
    </>
  );
}
