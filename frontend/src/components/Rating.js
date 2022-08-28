
const showStars = (prop, value) => {
    if(prop >= value) {
        return 'fa fa-star'
    }
    if (prop >= value-0.5) {
        return 'fa fa-star-half-o'
    }
    return 'fa fa-star-o'

}
const Rating = {
    render: (props) => {
      if (!props.value) {
        return '<div></div>';
      }
      return `
      <div class="rating">
        <span>
            <i class="${
                showStars(props.value, 1)
            }">
            </i>
        </span>  
        <span>
            <i class="${
                showStars(props.value, 2)
            }">
            </i>
        </span>  
        <span>
            <i class="${
                showStars(props.value, 3)
            }">
            </i>
        </span>  
        <span>
            <i class="${
                showStars(props.value, 4)
            }">
            </i>
        </span>  
        <span>
            <i class="${
                    showStars(props.value, 5)
                }">
            </i>
        </span>  
        <span> ${props.text || ''} </span>
      </div>
      `;
    },
  };
  export default Rating;
  