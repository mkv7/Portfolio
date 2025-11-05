const e = React.createElement;

function Section({ id, title, children }) {
  return e('section', { className: 'section', id }, [
    e('h2', { key: 'h2', className: 'title' }, title),
    e('div', { key: 'content' }, children)
  ]);
}

function Card({ title, children, footer }) {
  return e('div', { className: 'card' }, [
    e('h3', { key: 'h3' }, title),
    e('div', { key: 'body' }, children),
    footer ? e('div', { key: 'foot', className: 'footer' }, footer) : null
  ]);
}

function App() {
  return e('div', { className: 'container' }, [
    e('nav', { key: 'nav', className: 'nav' }, [
      e('div', { key: 'left', className: 'header-name' }, 'Moaeez Muhammad'),
      e('div', { key: 'right', className: 'tag' }, 'IT @ Aalto — ML/AI & C++')
    ]),
    e('div', { key: 'hero', className: 'hero' }, [
      e('h1', { key: 'h1', className: 'title' }, 'Hello — I'm Moaeez.'),
      e('p', { key: 'p1', className: 'tag' }, 'Aalto University IT student focusing on machine learning, signal/speech, and C++.'),
      e('div', { key: 'cta', style: { marginTop: '0.8rem' } }, [
        e('a', { className: 'btn', href: '#projects' }, 'See Projects')
      ])
    ]),
    e(Section, { key: 'about', id: 'about', title: 'About Me' }, [
      e('p', { key: 'p1' }, `I'm a Finnish IT student at Aalto University. My interests include low-resource speech recognition, PyTorch, and modern C++ OOP with clean build tooling.`),
      e('p', { key: 'p2' }, `Here are a few highlights:`),
      e('ul', { key: 'ul', className: 'list' }, [
        e('li', { key: 'l1' }, 'BSc in IT (graduating 2025), aiming for MSc (ML/Data Science/AI).'),
        e('li', { key: 'l2' }, 'Focus areas: ML (PyTorch), signal/speech, C++/CMake, Linux tooling.'),
        e('li', { key: 'l3' }, 'Hands-on with small simulations and notebooks.'),
      ])
    ]),
    e(Section, { key: 'edu', id: 'education', title: 'Education' }, [
      e('div', { key: 'row', className: 'cards' }, [
        e(Card, { key: 'c1', title: 'Aalto University — BSc IT' }, [
          e('p', { key: 'p1' }, 'Bachelor of Science in Information Technology.'),
          e('span', { key: 'b', className: 'badge' }, '2019–2025')
        ]),
        e(Card, { key: 'c2', title: 'MSc Goal — ML / Data Science / AI' }, [
          e('p', { key: 'p1' }, 'Targeting the CCIS Master’s program with ML/AI emphasis.'),
          e('span', { key: 'b', className: 'badge' }, '2026 →')
        ]),
      ])
    ]),
    e(Section, { key: 'projects', id: 'projects', title: 'Projects' }, [
      e('div', { key: 'cards', className: 'cards' }, [
        e(Card, { key: 'p1', title: 'ML — MNIST Digit Classifier' }, [
          e('p', { key: 'p' }, 'A small PyTorch project that trains a CNN on MNIST and visualizes accuracy curves. Includes a clean notebook.'),
          e('a', { key: 'a', href: 'https://github.com/', target: '_blank', rel: 'noreferrer' }, 'View on GitHub')
        ]),
        e(Card, { key: 'p2', title: 'C++ — Mini Physics World' }, [
          e('p', { key: 'p' }, '2D falling blocks demo using C++17, CMake and SFML. Simple OOP with Block and PhysicsWorld.'),
          e('a', { key: 'a', href: 'https://github.com/', target: '_blank', rel: 'noreferrer' }, 'View on GitHub')
        ]),
        e(Card, { key: 'p3', title: 'This Portfolio Site' }, [
          e('p', { key: 'p' }, 'Static React app powered by CDN, no build step needed, easy to deploy on GitHub Pages.'),
          e('a', { key: 'a', href: '#contact' }, 'Contact')
        ]),
      ])
    ]),
    e('hr', { key: 'sep', className: 'sep' }),
    e(Section, { key: 'contact', id: 'contact', title: 'Contact' }, [
      e('p', { key: 'p1' }, 'Email: '),
      e('p', { key: 'p2' }, e('a', { href: 'mailto:moaeez@example.com' }, 'moaeez@example.com'))
    ]),
    e('div', { key: 'footer', className: 'footer' }, '© ' + new Date().getFullYear() + ' — Moaeez Muhammad')
  ]);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));