import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {MegaMenu} from 'primereact/megamenu';

/* function for a megamenu */
function Megamenu() {
/* variable object that contains all megamenu submenu links and headers */
let megaItems = [
        {
          label: "Notifications", icon: 'pi pi-bell',
          items: [
              [
                  {
                      label: 'Notifications 1',
                      items: [{ label: 'Item 1.1' }, 
                              { label: 'Item 1.2' }]
                  },
                  {
                      label: 'Notifications 2',
                      items: [{ label: 'Item 2.1' }, 
                              { label: 'Item 2.2' },
                              { label: 'View all', icon: 'pi pi-chevron-right'}]
                  },
              ],
          ]
      },
      {
        label: "Paperclips", icon: 'pi pi-paperclip',
          items: [
              [
                  {
                      label: 'Paperclips 1',
                      items: [{ label: 'Item 1.1' }, 
                              { label: 'Item 1.2' }]
                  },
                  {
                      label: 'Paperclips 2',
                      items: [{ label: 'Item 2.1' }, 
                              { label: 'Item 2.2' },
                              { label: 'View all', icon: 'pi pi-chevron-right'}]
                  },
              ],
          ]
      },
      {
        label: "Information", icon: 'pi pi-info-circle',
          items: [
              [
                  {
                      label: 'Information 1',
                      items: [{ label: 'Item 1.1' }, 
                              { label: 'Item 1.2' }]
                  },
                  {
                      label: 'Information 2',
                      items: [{ label: 'Item 2.1' }, 
                              { label: 'Item 2.2' },{ label: 'View all', icon: 'pi pi-chevron-right'}]
                  }
              ]
          ]
      },
      {
        label: "Links", icon: 'pi pi-link',
          items: [
              [
                  {
                      label: 'Links 1',
                      items: [{ label: 'Item 1.1' }, 
                              { label: 'Item 1.2' }]
                  },
                  {
                      label: 'Links 2',
                      items: [{ label: 'Item 2.1' }, 
                              { label: 'Item 2.2' },{ label: 'View all', icon: 'pi pi-chevron-right'}]
                  },
              ]
          ]
      }
      ];
      
    return (

        <>
        <MegaMenu model={megaItems} orientation="horizontal" className='megamenu'/>
        </>   	
        )
    }

export default Megamenu