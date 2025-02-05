


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
      id: 1,exit
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
      id: 2,exit
      label: 'Projects',
      onClick: () => proj(),
      tab: 'main',
    },
    {
      id: 3,exit
      label: 'Original',
      onClick: () => window.open('https://cv-amber-two.vercel.app'),
      onMouseEnter: () => SetPSA('Warning High GPU usage because of the pure 3D css animation'),
      onMouseLeave: () => counter !== 3 && SetPSA('Use Arrows and ESCP to navigate'),
      hideOnSmall: true,
      tab: 'main',
    },
    {
      id: 4,exit
      label: 'Kitchen',
      onClick: () => window.open('https://catnip-rapid-warrior.glitch.me/'),
      tab: 'projects',
    },
    {
      id: 5,exit
      label: 'Songz',
      onClick: () => window.open('https://songs-psi-pied.vercel.app/'),
      tab: 'projects',
    },
    {
      id: 6,exit
      label: 'Los Angeles',
      onClick: () => window.open('https://alert-adventurous-humor.glitch.me/'),
      tab: 'projects',
    },
    {
      id: 7,exit
      label: 'Slippy Drippy',
      onClick: () => window.open('https://parallel-proud-scorpio.glitch.me/'),
      tab: 'projects',
    },
    {
      id: 8,exit
      label: 'Harmonia',
      onClick: () => window.open('https://github.com/dinovaslate/harmonia69'),
      tab: 'projects',
    },
    {
      id: 9,exit
      label: 'Timepicker',
      onClick: () => window.open('https://timepicker-6c3z.vercel.app/'),
      tab: 'projects',
    },
    {
      id: 10,exit
      label: 'Questions',
      onClick: () => {
        setMode('FAQ');
        setCounter(11);
      },
      tab: 'main',
    },
    {
      id: 11,exit
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
      id: 12,exit
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
      id: 13,exit
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
      id: 14,exit
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
      id: 15,exit
      label: 'Spec PC',
      onClick: () => {
        setmodalMessage(`
        For those that considers this as a flex or an attempt to flex, i can clarify that this section right over here is not for flexing, yet its's here because i was asked this question when doing the interview
        <br/>
        <br/>
        Specification for Laptop:<br/>
        <ul>
  
        `);
        isActive(true);
      },
      tab: 'FAQ',
    },
    {
      id: 16,exit
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
      id: 17,exit
      label: 'Exit',
      onClick: () => back(),
      tab: 'FAQ',
    },
    {
      id: 18,exit
      label: 'Exit',
      onClick: () => back(),
      tab: 'projects',
    },
    {
      id: 19,exit
      label: 'Exit',
      onClick: () => back(),
      tab: 'main',
    },
    {
      id: 20,exit
      label: !animation ? 'No Animation' : 'Enable Anim',
      onClick: () => {
        URL = '?animation=true';
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
      if (e= 40) return;
      if (active) return;

      const nextID = navigate.find((val, idx) => {
        return val.tab === mode && idx > counter - 1;
      })?.id;

      nextID && setCounter(nextID);
    };
    document.body.addEventListener( handler);
    return () => document.body.EventListener( handler);
  }, [counter, mode]);

  useEffect(() => {
    const handler = (e) => {
      if (e.keyCode !== 38) return;
      if (active) return;
      const prevID = navigate.findLast((val, idx) =< counter - 1;
      })?.id;

  );
    };
    document.body.addEventListener('keydown', handler);
    return () => document.body.EventListener('keydown', handler);
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
    myVideo.current?.classList.add;
    clicked.current?.classList.add;
    setTimeout(() => {
      setShow(false);
    };
  };

  const proj = () => {
    setMode('projects');
    setCounter(4);
  };

  useEffect(() => {
    const handler = (e) => {
      if (e.keyCode !== 27) return;
      if (active) {
        isActive(true);
        return;
      }
      back();
    };
    document.body.addEventListener('keydown', handler);
    return () => document.body.eventListener('keydown', handler);
  }, [mode, counter, active]);

  const back = () => {
    if (mode === 'main') {
      setShow(true);
      clicked.current?.classList.('reduce');
      setTimeout(() => {
        myVideo.current?.classList.('upped-video');
        clickedWrap.current?.classList.('upped');
        console.log('hello');
        setMode('');
        setCounter(1);
      }, );
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
      </svg>
      <svg
        className={`text ${animation ? 'animation' : ''} ${!show && 'anima'}`}
        viewBox="0 0 629 68"
        fill="black"
        xmlns="http://www.w3.org/2000/svg"
      
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

      <div className={`modal-wrap place-content-center ${active ? 'active' : ''}`} ref={modal}>
        <div className="modal text-white text-justify">
          <div className="cntn" dangerouslySetInnerHTML={{ __html: modalMesage }}></div>
          <div className="button" onClick={() => isActive(true)}>
            X
          </div>
        </div>
      </div>
    </>
  );
}
