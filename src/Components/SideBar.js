import React, { useEffect, useState } from 'react';
import './ComponentCSS/Sidebar.scss'

const Sidebar = ({ sections, checkIsSticky }) => {
  const [activeSection, setActiveSection] = useState('section1');
  const [isSticky, setIsSticky] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0); // Track navbar height for offset


  useEffect(() => {
    // Get the navbar height and set it
    const navbar = document.getElementById('navbar');
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      // Detect when to make the sidebar sticky (after scrolling past the hero image)
      const sidebarStartPosition = document.getElementById('sidebar-start').offsetTop - navbarHeight;
      if (window.scrollY >= sidebarStartPosition) {
        setIsSticky(true);
        checkIsSticky(true);
      } else {
        setIsSticky(false);
        checkIsSticky(false);
      }

      // Highlight the active section
      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element && element.offsetTop <= scrollPosition && element.offsetTop + element.clientHeight > scrollPosition) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections, navbarHeight]);

  return (
    // <div className='sidebar'>
    <div id="sidebar-start">
      <div style={{
        position: isSticky ? 'fixed' : 'relative', 
        top: isSticky ? `${navbarHeight}px` : 'auto',
        width: '315px',
        height: '100%',
        borderRight: '1px solid black',
        marginRight: '10px',
        paddingRight: '20px',
        textAlign: 'end',
      }}>
        {sections.map(({ id, label, description }) => (
          <SidebarItem 
            key={id} 
            id={id} 
            label={label} 
            description={description} 
            isActive={activeSection === id} 
            navbarHeight={navbarHeight}  // Pass navbar height to adjust smooth scroll offset
          />
        ))}
      </div>
    </div>
  );
};

const SidebarItem = ({ id, label, description, isActive, navbarHeight }) => {
  // Function to scroll smoothly to the section with an offset
  const handleScroll = (e) => {
    e.preventDefault(); // Prevent the default link behavior
    const sectionElement = document.getElementById(id);
    const offset = -navbarHeight; // Adjust offset for the navbar height and some margin

    if (sectionElement) {
      const yOffset = sectionElement.getBoundingClientRect().top + window.pageYOffset + offset;
      window.scrollTo({ top: yOffset, behavior: 'smooth' }); // Scroll to the adjusted position
    }
  };

  return (
    <div style={{ padding: '10px 0', fontWeight: isActive ? 'bold' : 'normal', position: 'relative' }}>
      <a 
        href={`#${id}`} 
        onClick={handleScroll} // Trigger smooth scrolling on click
        className={`sidebar-item__link ${isActive ? 'sidebar-item__selected' : 'sidebar-item__unselected'}`}
      >
        <div>{label}</div>
        {isActive && (
          <p className='sidebar-item__description'>
            {description}
          </p>
        )}
      </a>
      {/* Conditionally render the dot only when the section is active */}
      {isActive && (
        <span style={{
          position: 'absolute',
          right: '-25px', // Move dot to the right edge, outside the sidebar
          top: '23px',
          transform: 'translateY(-50%)', // Center the dot vertically with the text
          width: '10px',
          height: '20px',
          borderRadius: '50%',
          backgroundColor: 'white',
        }}
        >
          <span style={{
            position: 'absolute',
            right: '0', // Move dot to the right edge, outside the sidebar
            top: '50%',
            transform: 'translateY(-50%)', // Center the dot vertically with the text
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            backgroundColor: '#3B6075',  // Only show the dot when the section is active
        }}/>
        </span>
        
      )}
    </div>
  );
};


// Sidebar item component
// const SidebarItem = ({ id, label, description, isActive, navbarHeight }) => {
//   const handleScroll = (e) => {
//     e.preventDefault();
//     const sectionElement = document.getElementById(id);
//     const offset = -navbarHeight - 10; // Adjust offset for the navbar height and some margin

//     if (sectionElement) {
//       const yOffset = sectionElement.getBoundingClientRect().top + window.pageYOffset + offset;
//       window.scrollTo({ top: yOffset, behavior: 'smooth' });
//     }
//   };

//   return (
//     <div style={{ padding: '10px 0', fontWeight: isActive ? 'bold' : 'normal', position: 'relative' }}>
//       <a
//         href={`#${id}`}
//         onClick={handleScroll}
//         style={{ textDecoration: 'none', color: isActive ? '#000' : '#666', display: 'block' }}
//       >
//         <div>{label}</div>
//         {isActive && (
//           <small style={{ color: '#999', display: 'block' }}>
//             {description}
//           </small>
//         )}
//       </a>
//       {isActive && (
//         <span style={{
//           position: 'absolute',
//           right: '-10px',
//           top: '50%',
//           transform: 'translateY(-50%)',
//           width: '10px',
//           height: '10px',
//           borderRadius: '50%',
//           backgroundColor: '#000',
//         }}></span>
//       )}
//     </div>
//   );
// };


export default Sidebar;