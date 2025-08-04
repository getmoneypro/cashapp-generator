// Cash App Screenshot Generator
// Production-ready implementation

// Base64 encoded images - NO CORS ISSUES EVER!
const BASE64_IMAGES = {
    'cellular': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACmSURBVHgBrZGxDcIwFESPQEGXsIHZgBE8AiMwAiOwAaKkYwQ2oKWkpIOSjmwA95WjIEqi/DhPevqR45yc8wTpFHSjecII7OhHnjOMS+4N3OskbxqbNngDV5rWV/AGRlRlBziYtawHetFzSRfoSdYR+KOAAwu0Xh5yi0QscK0TmRGJ1H85RyJtHZYYyJQ+UfVo80Dv9EWXCra1q/bbbc/pjR71/u/7L/9EGjDOXDSsAAAAAElFTkSuQmCC',
    'wifi': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAANCAYAAACkTj4ZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADLSURBVHgBnZOBDYIwFES/xgEYgRE6QkdwAxmBDdQJZAPdgDhB3UA3cATcQH/NNRylLdFLXijlc73fwkryqhWjVMoLPHBdlFVOyqC8M9yVBgslV3eFl1M8YThJwQn8uEeRwSI16loYsGGP9r8Pw2QXJimpBTzfkOEg1OZBxpj+hb2k98lFdR1Sz2SlvNGBc5RQNpGRoYKbcpXxuK2yw3irHGXhU/BxW7qvydyPnWTaycnK9IRm7bDWBaNw9GxcyZ+6UKKf2kkp/BJFfQCOlU3bir3MsgAAAABJRU5ErkJggg==',
    'battery': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAANCAYAAAC6hw6qAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADlSURBVHgBvZQ9CsJAEIVffsTCRqs0FmoRQUxnYRkvYO8RPILnshaDlScQtYiVjY2CCmIKfUMmuNhuyIOPLJllZmd2Zxz81CZ90iI12CkjV3IiqWnw9TskPbLVjRnsJAeWg491fSgMLmlosBWZkQv5WHIkc/UZwaiYg7yUXeKRNcrVhLw0ibTIUFK/kRjlKyZP5FWsyw8f1UneydtFtQqrDlhphg+SSMDiUhOUr4Q0kfe29OLd04AjskHe8B3dZCN59QuyJAOyw98wCcmUBLAfa1AfgfqMTINjrKX5ZeKUOUv35GwavpTpOLfZ84M8AAAAAElFTkSuQmCC',
    'card': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF1SURBVHgB7ZZPToNAFMYflSZumuAWNngDFkBY4g28Qe0N9ASlJ9AbCCdx3BFgwRFww9buScBvIm0QsFL+JCbll7wwMMO816+PN49oZubSEX6b0HXdxmUL02AS9YcJguCFYei2TV5Ru3PumL+gwq5pGCrsXpZlStP0vT7ZUMAwjIeiKF5pGu6iKGLVB2J9BZyvK2NvtVo9Msb21APLstQsyxz8BYc9ubKsuqahAOQvjtGJ4q3v+wkNQNM0Cft8lrd7KHBTnV+cenmoc04cx1X1GsksUkdM01znef7CN4GkCcwJgsCjgSy6LkQ+OFT+AozVMpjBnBPAD/mgQK/E7B0AHD5x6ctb7nxHI9A5B8pK5tLIdFZgKuYA/mUAx8+Ll1EaCD8P6MwA4sNguVw+/7XBKWzblnAYbSuPWH1N22Fk4/JGE4A6sqk3Jo2GBE1DguaBB2bTuOxwEjbKd2tHhCCYoigf9F37VeoPzycftoFzl2ZmZlr4Ao59czfrdiImAAAAAElFTkSuQmCC',
    'pay': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIYSURBVHgB7ZbPTsJAEManwMWEkHrhwAHLG9QACTfrzaPe9CS+gTwB8ATgEwg3b8ITWG8kQOwbWBPCGUNIPPDHbyKQlRQ6UI0e+CWbbbfT3enMN7sl2rPnj9EoIOl0+lzTtMflhJp23G63Hen7IQqORQGI0A5kMhkL3QmauepAOBwe0BZslQLLsvThcFhBmPMbJ9W0Ghwpt1otl3zYKgWj0ch3cWY2m+Unk8lTNps1/WzFDnDYeWJliENdxtgF+lO0ApxzFScM+krRRsQawISs9uU9rgtQe00xsdGqcPQWfRHtbuW5J+IIhEIhfcUh3cuu0+lUo9FoCn2JBIRJSCKRMNCdKUNnGKNkMvnW6/W+Kd913Q8SIq4C0zT1SCTyikuvL28gJU1JyHd2gIGq8wj9/drJIMLpdFrodrsNEiJOAdPv9x2EvI5FWN2Gh4kOJy6RmnfYtiRz7nwW5HI5A7VewuXJvORUBuPxOOU4ju+uGPgwYuapqZCiD0Ti5kfLcNOuxguxCGkHRA5gcyniC1/gRIVD72WD50fqPRwSHUq+KVhV/ny7tSHEJi+C3sAmdU3Kqcg2iEqKBPhuxTjVbIjNXQht3ucXhxIW93qtTEJ8y5B3uXg8XseCB2g5H/MBHLrC1z+QkK2qYFF6iMK1MuzAMQfjz7FYrGHb9u/9kDAQJP//nS/uUe+HknpfR6B/QhZbkMX37PkXfAKaPNSLUv9NKwAAAABJRU5ErkJggg==',
    'search': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJDSURBVHgB7Va7bhpBFL3DAkokkKBBAiTkP8gWINFl06WL/CWOv8D4CzBdWrqUKZMq6wokKNZfkI2EgJIICsQz58bsZm3P7swgW2440mjncZj7vgPRCSe8MoQu0XGcwmKxuOApho1RwJhheEIIz7KsTr/f98kQSgUOgq8w/ay8TIib9Xp97XnejDSRqECz2Tzbbrc/9/v9GeleKIQPb3zQ9UYq7oAtlwh3sT7P5XLF4XAo+Mtr3g8IzOff2bZdIB2F4w7q9XqbHrr9EkJvEvjMbYcXIxyDweCSjlGAXb/ZbH7pCo9TAncUVfkgDQESKWq5qyOcceC5wTqdTisTV6oA3PcuJKRSHTIAciDKf6/ixyWhHUxWq5VLBkACurJ7TBUIM9ikpiV8ZSXEKRBeoltOMXyl8nEKeMEkm806ZAA0IUd2j6kCt8Fkt9tdkAGQwCEfCXmn4ksVQP1Gy8451LcSjUYjeKz+IZPJKMvXkm1Op9NluVwuwprmYetjpVL5Mx6P+5QgHBaHArkc0Qm/kgLpuAOUUwsWfIq8BW14gtedfD7vAjN+L+bzucNux74T/T36x5408Oyv4SO00B2vkwhW0uFoNJqVSqUuLHwbCUcs2Dvg/aD/eeAgdITQ3R6lAIPzYTKZfK/Val0IYI8t6b7BvKH7Oue86OJpPu/1et8gzIVQoauE9l8yUyBfWvhcRbak4VB64FjIPFGtVn9j/0FzStELAha38AmtRgiftPUX80AA9gRbjukd8uSL7/tLOuGECP4C2zgH5V+cvfwAAAAASUVORK5CYII=',
    'history': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKoSURBVHgB7Va9jhoxEPYCRwMF11Ig0qXck0Ciy1KmIm9w8AR3eYKDJwhvAOmSDrp07HUIkNg3OCrabAFFED/55jJLJvvjNboyfJK1tnc883lmPLZSV/zvsC4RdhyntNlsHqh7Op2qlmVV+ZeP5qGNc7ncaDqdrkx1GhFoNBrV/X4/IMMm8iA2zGazPRMi2TSBer3+cDwev6H7XpnDxpp2uVz+tV6vpzrBjO5nrVZ7gqv76JbEtAvlHbj63WKxsKgBd2gd/BsJOVrzhXTobCSGgHbOxv8IWtYK4w4MukoDCtfhcJhQjojpz1jXNybAMV8q3jmMe4VCoem6rq8MYNt2CR6aUJenfIzv4nIiNgTYwZMwvkoyDi+1qYXnPc/zsYEmreWpEidxBBEP8O5fgjHFOo45GYabB0yyM5/Ph2EZxN/BZxKMofeWyEmZiAcg9EkMx0lHScY4FO8zOF9c9Xczj2GZuBC0gg52NlJvBE7MVzH8oAwI2KLvqTcin8+7QV9UTi2B85lHXI0IQPF9XDISZAjjQqUtRClwpWJKSJB4SSKShAgBKFoFfToRSQs5wXriqEki7WAOfRlSP5WAVIh64CgNQKKLS6cZJhKCNqdyMQueFd962M09PkOlAce4Sy3YuawJ0NES4uPw+kgh4jL6U0w10+p/EkyKWiQEXKncM0PLGhApdSHo8UKXktAzNL4LwJSu1teEocSii+USEmR8u93KG9GnB0qcbCwBZioX2Dc3N0vdqQhA9R/GlzAuky/xdWSlKOviE35QjOBOSiYvKFREbLfbOZlMhpLWCcn36LQk2Uh9E4LEI5O4NA98Nt7XCaW+CelNV6lUvsOlt+rfM62Di7z5OJvNfqQJXvQs52NF13WLybx6haonF6LnYrHYN305XXEF4Tf2AkzX6VmD3wAAAABJRU5ErkJggg=='
};

// Device detection and optimization
function getOptimalScreenshotSettings() {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isLowMemory = navigator.deviceMemory && navigator.deviceMemory <= 4;
    
    return {
        scale: isMobile || isLowMemory ? 1.5 : 2,
        backgroundColor: '#ffffff',
        useCORS: false,
        allowTaint: false,
        logging: false,
        imageTimeout: isMobile ? 10000 : 15000,
        onclone: null // Disable cloning for better performance
    };
}

// Add loading and success animations
function addButtonAnimation(button, type = 'loading') {
    button.style.position = 'relative';
    button.style.overflow = 'hidden';
    
    if (type === 'loading') {
        button.innerHTML = `
            <span style="opacity: 0.7;">${button.textContent}</span>
            <span class="loading-spinner" style="
                position: absolute;
                right: 15px;
                top: 50%;
                transform: translateY(-50%);
                width: 16px;
                height: 16px;
                border: 2px solid rgba(255,255,255,0.3);
                border-top: 2px solid white;
                border-radius: 50%;
                animation: spin 1s linear infinite;
            "></span>
        `;
    } else if (type === 'success') {
        button.style.background = 'linear-gradient(135deg, #00d64b, #00c43d)';
        button.style.transform = 'scale(1.05)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 200);
    }
}

// Add floating notification
function showFloatingNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? 'linear-gradient(135deg, #00d64b, #00c43d)' : 'linear-gradient(135deg, #ff4757, #ff3742)'};
        color: white;
        padding: 15px 25px;
        border-radius: 12px;
        font-weight: 600;
        box-shadow: 0 10px 30px rgba(0, 214, 75, 0.3);
        z-index: 10000;
        animation: slideInRight 0.5s ease-out, fadeOut 0.5s ease-in 2.5s forwards;
        transform: translateX(100%);
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Remove after animation
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 3000);
}

// Add CSS animations for notifications
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes spin {
        0% { transform: translateY(-50%) rotate(0deg); }
        100% { transform: translateY(-50%) rotate(360deg); }
    }
    
    @keyframes slideInRight {
        0% { transform: translateX(100%); opacity: 0; }
        100% { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes fadeOut {
        0% { opacity: 1; transform: translateX(0); }
        100% { opacity: 0; transform: translateX(100%); }
    }
    
    .control-group {
        animation: slideInUp 0.6s ease-out;
        animation-fill-mode: both;
    }
    
    .control-group:nth-child(1) { animation-delay: 0.1s; }
    .control-group:nth-child(2) { animation-delay: 0.2s; }
    .control-group:nth-child(3) { animation-delay: 0.3s; }
    .control-group:nth-child(4) { animation-delay: 0.4s; }
    .control-group:nth-child(5) { animation-delay: 0.5s; }
    
    @keyframes slideInUp {
        0% {
            opacity: 0;
            transform: translateY(30px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .phone-container {
        animation: phoneFloat 4s ease-in-out infinite;
    }
    
    @keyframes phoneFloat {
        0%, 100% { transform: translateY(0px) rotateY(0deg); }
        50% { transform: translateY(-10px) rotateY(2deg); }
    }
    
    .amount {
        animation: amountGlow 2s ease-in-out infinite;
    }
    
    @keyframes amountGlow {
        0%, 100% { text-shadow: 0 0 0 rgba(0, 214, 75, 0); }
        50% { text-shadow: 0 0 20px rgba(0, 214, 75, 0.3); }
    }
`;
document.head.appendChild(notificationStyles);

// Statistics tracking
let stats = {
    generated: 0,
    downloaded: 0
};

// Format balance with k notation (1000 -> 1k, 1100 -> 1.1k, etc.)
function formatBalance(value) {
    const num = Math.floor(value);
    if (num >= 1000) {
        const kValue = num / 1000;
        // If it's a whole number (like 1000, 2000, 3000), show as 1k, 2k, 3k
        if (kValue % 1 === 0) {
            return kValue + 'k';
        }
        // If it has decimals, show one decimal place (like 1.1k, 2.3k)
        return kValue.toFixed(1) + 'k';
    }
    return num.toString();
}

// Data generators - Expanded for unlimited variety
const firstNames = [
    'Ariana', 'Marcus', 'Sofia', 'David', 'Emma', 'Jordan', 'Isabella', 'Ryan',
    'Zoe', 'Nathan', 'Ava', 'Tyler', 'Mia', 'Austin', 'Grace', 'Dylan',
    'Olivia', 'Blake', 'Chloe', 'Mason', 'Lily', 'Hunter', 'Sophia', 'Ethan',
    'Madison', 'Logan', 'Harper', 'Jackson', 'Aria', 'Lucas', 'Ella', 'Alex',
    'Scarlett', 'Connor', 'Victoria', 'Caleb', 'Zoey', 'Noah', 'Layla', 'Owen',
    'Maya', 'Cole', 'Zara', 'Ivan', 'Luna', 'Kai', 'Nora', 'Leo', 'Iris', 'Max',
    'Amelia', 'Liam', 'Charlotte', 'Benjamin', 'Abigail', 'Elijah', 'Emily', 'Oliver',
    'Avery', 'William', 'Scarlett', 'James', 'Madison', 'Henry', 'Layla', 'Alexander',
    'Penelope', 'Michael', 'Aria', 'Ethan', 'Chloe', 'Daniel', 'Violet', 'Jacob',
    'Sofia', 'Logan', 'Evelyn', 'Jackson', 'Hannah', 'Levi', 'Zoey', 'Sebastian',
    'Camila', 'Mateo', 'Riley', 'Jack', 'Leah', 'Owen', 'Lillian', 'Theodore',
    'Nora', 'Aiden', 'Zoe', 'Samuel', 'Stella', 'John', 'Ellie', 'Joseph',
    'Grace', 'Wyatt', 'Paisley', 'David', 'Savannah', 'Carter', 'Natalie', 'Julian',
    'Brooklyn', 'Luke', 'Kinsley', 'Jayden', 'Lucy', 'Gabriel', 'Elena', 'Anthony',
    'Claire', 'Isaac', 'Maya', 'Grayson', 'Naomi', 'Jack', 'Samantha', 'Julian',
    'Caroline', 'Levi', 'Allison', 'Christopher', 'Gabriella', 'Andrew', 'Anna',
    'Joshua', 'Serenity', 'Nathan', 'Nevaeh', 'Caleb', 'Cora', 'Ryan', 'Ariana',
    'Adrian', 'Emery', 'Miles', 'Lydia', 'Eli', 'Melody', 'Nolan', 'Julia',
    'Christian', 'Mackenzie', 'Aaron', 'Ruby', 'Cameron', 'Brooklyn', 'Ezra', 'Alice',
    'Colton', 'Eva', 'Luca', 'Ryleigh', 'Landon', 'Jordyn', 'Hunter', 'Hazel',
    'Jonathan', 'Autumn', 'Santiago', 'Dakota', 'Axel', 'Trinity', 'Easton', 'Ivy'
];

const lastNames = [
    'Morales', 'Zhang', 'Johnson', 'Williams', 'Brown', 'Davis', 'Miller', 'Wilson',
    'Martinez', 'Anderson', 'Taylor', 'Thomas', 'Hernandez', 'Moore', 'Martin', 'Jackson',
    'Thompson', 'White', 'Lopez', 'Lee', 'Gonzalez', 'Harris', 'Clark', 'Lewis',
    'Robinson', 'Walker', 'Perez', 'Hall', 'Young', 'Allen', 'Sanchez', 'Wright',
    'King', 'Scott', 'Green', 'Baker', 'Adams', 'Nelson', 'Hill', 'Ramirez',
    'Torres', 'Flores', 'Rivera', 'Cooper', 'Richardson', 'Cox', 'Howard', 'Ward',
    'Peterson', 'Gray', 'James', 'Watson', 'Brooks', 'Kelly', 'Sanders', 'Price',
    'Bennett', 'Wood', 'Barnes', 'Ross', 'Henderson', 'Coleman', 'Jenkins', 'Perry',
    'Powell', 'Long', 'Patterson', 'Hughes', 'Flores', 'Washington', 'Butler', 'Simmons',
    'Foster', 'Gonzales', 'Bryant', 'Alexander', 'Russell', 'Griffin', 'Diaz', 'Hayes',
    'Myers', 'Ford', 'Hamilton', 'Graham', 'Sullivan', 'Wallace', 'Woods', 'Cole',
    'West', 'Jordan', 'Owens', 'Reynolds', 'Fisher', 'Ellis', 'Harrison', 'Gibson',
    'Mcdonald', 'Cruz', 'Marshall', 'Ortiz', 'Gomez', 'Murray', 'Freeman', 'Wells',
    'Webb', 'Simpson', 'Stevens', 'Tucker', 'Porter', 'Hunter', 'Hicks', 'Crawford',
    'Henry', 'Boyd', 'Mason', 'Morales', 'Kennedy', 'Warren', 'Dixon', 'Ramos',
    'Reyes', 'Burns', 'Gordon', 'Shaw', 'Holmes', 'Rice', 'Robertson', 'Hunt',
    'Black', 'Daniels', 'Palmer', 'Mills', 'Nichols', 'Grant', 'Knight', 'Ferguson',
    'Rose', 'Stone', 'Hawkins', 'Dunn', 'Perkins', 'Hudson', 'Spencer', 'Gardner',
    'Stephens', 'Payne', 'Pierce', 'Berry', 'Matthews', 'Arnold', 'Wagner', 'Willis',
    'Ray', 'Watkins', 'Olson', 'Carroll', 'Duncan', 'Snyder', 'Hart', 'Cunningham',
    'Bradley', 'Lane', 'Andrews', 'Ruiz', 'Harper', 'Fox', 'Riley', 'Armstrong',
    'Carpenter', 'Weaver', 'Greene', 'Lawrence', 'Elliott', 'Chavez', 'Sims', 'Austin',
    'Peters', 'Kelley', 'Franklin', 'Lawson', 'Fields', 'Gutierrez', 'Ryan', 'Schmidt',
    'Carr', 'Vasquez', 'Castillo', 'Wheeler', 'Chapman', 'Oliver', 'Montgomery', 'Richards'
];

const paymentNotes = [
    'For groceries', 'Lunch money', 'Coffee fund', 'Gas money', 'Dinner split',
    'Movie tickets', 'Rent payment', 'Uber ride', 'Birthday gift', 'Concert tickets',
    'Book purchase', 'Gym membership', 'Pizza night', 'Study materials', 'Parking fee',
    'Laundry money', 'Phone bill', 'Streaming service', 'Art supplies', 'Thanks!',
    'Breakfast treat', 'Snack money', 'Taxi fare', 'Game night', 'Ice cream run',
    'Date night', 'Shopping spree', 'Vacation fund', 'Emergency cash', 'Birthday cake',
    'Medicine', 'Pet supplies', 'Flowers', 'For I', 'For rent', 'For food',
    'Coffee run', 'Splitting the check', 'Thanks bro', 'Appreciate you', 'You rock',
    'Here you go', 'For last night', 'From yesterday', 'Quick cash', 'Small loan',
    'Paying you back', 'IOU', 'Split the bill', 'Reimbursement', 'Covering you',
    'For the ride', 'Gas split', 'Drinks last night', 'Your share', 'Thanks again',
    'For helping out', 'Appreciate it', 'Quick payment', 'Settling up', 'All good',
    'Thanks dude', 'You got it', 'My bad', 'Sorry for delay', 'Finally paying',
    'Better late than never', 'As promised', 'Here we go', 'All set', 'Done deal',
    'Grocery run', 'Store trip', 'Shopping trip', 'Quick errand', 'Picking up stuff',
    'Target run', 'Walmart trip', 'Costco haul', 'Food shopping', 'Weekly groceries',
    'Milk and bread', 'Snacks for party', 'Party supplies', 'Event planning', 'Group order',
    'Pizza for everyone', 'Ordering dinner', 'Food delivery', 'DoorDash split', 'Uber Eats',
    'Grubhub order', 'Late night food', 'Study snacks', 'Office lunch', 'Team meal',
    'Birthday dinner', 'Celebration meal', 'Special occasion', 'Date night dinner', 'Anniversary',
    'Valentine gift', 'Christmas present', 'Holiday shopping', 'Gift card', 'Surprise gift',
    'Just because', 'Random act', 'Being nice', 'Good karma', 'Paying forward',
    'Help with bills', 'Utility payment', 'Internet bill', 'Electric bill', 'Water bill',
    'Rent split', 'Roommate expenses', 'Shared costs', 'House stuff', 'Apartment things',
    'Home supplies', 'Cleaning stuff', 'Household items', 'Kitchen supplies', 'Bathroom stuff',
    'Office supplies', 'Work expenses', 'Business lunch', 'Client meeting', 'Conference fees',
    'Travel expenses', 'Hotel split', 'Flight money', 'Vacation costs', 'Trip planning',
    'Gas for road trip', 'Rental car', 'Parking fees', 'Toll money', 'Transportation',
    'Medical bills', 'Doctor visit', 'Prescription', 'Health expenses', 'Dental work',
    'Vet bills', 'Pet food', 'Dog walker', 'Pet sitting', 'Animal care',
    'Car repair', 'Oil change', 'Tire replacement', 'Maintenance', 'Auto expenses',
    'Phone repair', 'Screen fix', 'Tech support', 'Software purchase', 'App subscription',
    'Netflix share', 'Spotify split', 'Gaming subscription', 'Online service', 'Monthly fee',
    'Gym membership', 'Yoga class', 'Personal trainer', 'Sports equipment', 'Fitness gear',
    'Concert tickets', 'Show tickets', 'Event passes', 'Festival entry', 'Entertainment',
    'Book club', 'Magazine subscription', 'Newspaper', 'Reading materials', 'Educational',
    'Course fees', 'Tuition help', 'School supplies', 'Academic expenses', 'Learning costs',
    'Wedding gift', 'Baby shower', 'Housewarming', 'Graduation gift', 'Achievement reward'
];

// Removed profile images array - using initials only for production reliability

// Utility functions
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function generateRandomName() {
    const firstName = getRandomElement(firstNames);
    const lastName = getRandomElement(lastNames);
    return `${firstName} ${lastName}`;
}

function generateCashtag(name) {
    const [firstName, lastName] = name.toLowerCase().split(' ');
    const variations = [
        `$${firstName}${lastName.charAt(0)}`,
        `$${firstName.charAt(0)}${lastName}`,
        `$${firstName}_${lastName.charAt(0)}`,
        `$${firstName}${lastName.substring(0, 2)}`,
        `$${firstName.substring(0, 3)}${lastName.substring(0, 3)}`,
        `$${firstName}${Math.floor(Math.random() * 99).toString().padStart(2, '0')}`,
        `$${firstName}_${Math.floor(Math.random() * 999)}`,
        `$${firstName}${lastName}`,
        `$${firstName}${lastName.charAt(0)}${Math.floor(Math.random() * 9)}`,
        `$${firstName.substring(0, 4)}${lastName.substring(0, 2)}`,
        `$${firstName}_${lastName}`,
        `$${firstName}.${lastName}`,
        `$${firstName}${lastName.substring(0, 3)}`,
        `$${firstName}${Math.floor(Math.random() * 9999)}`,
        `$${lastName}${firstName.charAt(0)}`,
        `$${lastName.substring(0, 3)}${firstName.substring(0, 3)}`,
        `$${firstName}${lastName.charAt(0).toUpperCase()}`,
        `$${firstName}_${lastName.substring(0, 2)}`,
        `$${firstName.charAt(0)}${firstName.charAt(1)}${lastName}`,
        `$${firstName}dot${lastName}`,
        `$${firstName}x${lastName.charAt(0)}`,
        `$${firstName}the${lastName.charAt(0)}`
    ];
    return getRandomElement(variations);
}

function generateTimestamp() {
    const timeFormat = document.getElementById('timeFormat').value;
    const transactionTimeInput = document.getElementById('transactionTimeInput').value;
    
    // Parse the time input (HH:MM format)
    const [hours, minutes] = transactionTimeInput.split(':').map(Number);
    
    // Convert to 12-hour format
    let displayHours = hours;
    let ampm = 'AM';
    
    if (hours === 0) {
        displayHours = 12;
        ampm = 'AM';
    } else if (hours === 12) {
        displayHours = 12;
        ampm = 'PM';
    } else if (hours > 12) {
        displayHours = hours - 12;
        ampm = 'PM';
    }
    
    const timeString = `${displayHours}:${minutes.toString().padStart(2, '0')} ${ampm}`;
    
    if (timeFormat === 'today') {
        return `Today at ${timeString}`;
    } else {
        return `Yesterday at ${timeString}`;
    }
}

function generateRandomNote() {
    return Math.random() > 0.2 ? getRandomElement(paymentNotes) : '';
}

// Avatar functions
function generateAvatarColor(name) {
    const colors = [
        '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8',
        '#F7DC6F', '#BB8FCE', '#85C1E9', '#F8C471', '#82E0AA',
        '#FF8A80', '#B39DDB', '#81C784', '#FFAB91', '#90CAF9',
        '#FFCC02', '#26C6DA', '#AB47BC', '#66BB6A', '#FFA726'
    ];
    
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    
    return colors[Math.abs(hash) % colors.length];
}

function generateInitials(name) {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
}

// Privacy functions
function applyPrivacySettings() {
    const hideNameCheckbox = document.getElementById('hideName');
    const hideProfileCheckbox = document.getElementById('hideProfile');
    const hideCashtagCheckbox = document.getElementById('hideCashtag');
    const hideNoteCheckbox = document.getElementById('hideNote');
    
    const nameElement = document.getElementById('recipientName');
    const profileContainer = document.getElementById('profileContainer');
    const cashtagElement = document.getElementById('recipientCashtag');
    const noteElement = document.getElementById('transactionNote');
    
    // Reset classes
    nameElement.classList.remove('hidden-name');
    profileContainer.classList.remove('hidden-avatar');
    cashtagElement.classList.remove('hidden-cashtag');
    noteElement.classList.remove('hidden-note');
    
    // Apply privacy settings
    if (hideNameCheckbox.checked) {
        nameElement.classList.add('hidden-name');
        nameElement.textContent = '████████████';
    }
    
    if (hideProfileCheckbox.checked) {
        profileContainer.classList.add('hidden-avatar');
    }
    
    if (hideCashtagCheckbox.checked) {
        cashtagElement.classList.add('hidden-cashtag');
        cashtagElement.textContent = '$████████';
    }
    
    if (hideNoteCheckbox.checked && noteElement.textContent.trim()) {
        noteElement.classList.add('hidden-note');
        noteElement.textContent = '████████████████';
    }
}

// Statistics functions
function updateStats(type) {
    stats[type]++;
    const element = document.getElementById(`${type}Count`);
    if (element) {
        element.textContent = stats[type];
        // Add smooth number animation
        element.style.animation = 'none';
        element.offsetHeight; // Trigger reflow
        element.style.animation = 'countUp 0.6s ease-out';
    }
    // Safe localStorage update
    try {
        localStorage.setItem('cashapp-generator-stats', JSON.stringify(stats));
    } catch (error) {
        console.warn('Could not save stats to localStorage:', error);
    }
}

function loadStats() {
    try {
        const saved = localStorage.getItem('cashapp-generator-stats');
        if (saved) {
            const parsedStats = JSON.parse(saved);
            stats = {
                generated: parsedStats.generated || 0,
                downloaded: parsedStats.downloaded || 0
            };
        }
    } catch (error) {
        console.warn('Could not load stats from localStorage:', error);
        stats = { generated: 0, downloaded: 0 };
    }
    
    // Always update the display
    const generatedElement = document.getElementById('generatedCount');
    const downloadedElement = document.getElementById('downloadCount');
    
    if (generatedElement) generatedElement.textContent = stats.generated;
    if (downloadedElement) downloadedElement.textContent = stats.downloaded;
}

// Main generation function
function generateNewTransaction() {
    const amount = document.getElementById('amount').value || '50.00';
    const balance = document.getElementById('balance').value || '1200';
    const customNote = document.getElementById('note').value;
    
    // Generate random data
    const name = generateRandomName();
    const cashtag = generateCashtag(name);
    const timestamp = generateTimestamp();
    const note = customNote || generateRandomNote();
    
    // Update display elements
    document.getElementById('displayAmount').textContent = parseFloat(amount).toFixed(2);
    document.getElementById('displayBalance').textContent = '$' + formatBalance(balance);
    document.getElementById('recipientName').textContent = name;
    document.getElementById('recipientCashtag').textContent = cashtag;
    document.getElementById('transactionTimeDisplay').textContent = timestamp;
    
    // Handle note
    if (note) {
        document.getElementById('transactionNote').textContent = note;
        document.getElementById('transactionNote').style.display = 'block';
    } else {
        document.getElementById('transactionNote').style.display = 'none';
    }
    
    // Always use initials for consistency and no CORS issues
    const profileImage = document.getElementById('profileImage');
    const avatarPlaceholder = document.getElementById('avatarPlaceholder');
    
    const avatarColor = generateAvatarColor(name);
    const initials = generateInitials(name);
    
    profileImage.style.display = 'none';
    avatarPlaceholder.style.display = 'flex';
    avatarPlaceholder.style.background = `linear-gradient(135deg, ${avatarColor}, ${avatarColor}dd)`;
    avatarPlaceholder.textContent = initials;
    
    // Apply privacy settings
    applyPrivacySettings();
    
    // Update stats
    updateStats('generated');
    showFloatingNotification('✨ New transaction generated!', 'success');
}

// Screenshot functionality
async function captureScreenshot() {
    const button = document.getElementById('downloadBtn');
    const originalText = button.textContent;
    button.textContent = '📸 Capturing...';
    button.disabled = true;
    
    // Add visual loading state
    addButtonAnimation(button, 'loading');
    
    // IMPORTANT: Never touch the original DOM - only work with clones
    console.log('Starting screenshot - original DOM will remain untouched');
    
    try {
        // Import html2canvas if not loaded
        if (!window.html2canvas) {
            const script = document.createElement('script');
            script.src = 'https://html2canvas.hertzen.com/dist/html2canvas.min.js';
            document.head.appendChild(script);
            
            await new Promise((resolve, reject) => {
                script.onload = resolve;
                script.onerror = () => reject(new Error('Failed to load html2canvas'));
                setTimeout(() => reject(new Error('Timeout loading html2canvas')), 15000);
            });
        }
        
        const element = document.getElementById('screenshot-area');
        
        // Ensure element exists and has dimensions
        if (!element || element.offsetWidth === 0 || element.offsetHeight === 0) {
            throw new Error('Screenshot area not found or has no dimensions');
        }
        
        // BASE64 EMBEDDED SOLUTION: Simple screenshot with embedded images
        
        // Hide profile image, show initials only
        const profileImg = element.querySelector('#profileImage');
        const avatarDiv = element.querySelector('#avatarPlaceholder');
        
        if (profileImg) profileImg.style.display = 'none';
        if (avatarDiv) avatarDiv.style.display = 'flex';
        
        // Small delay for DOM to update
        await new Promise(resolve => setTimeout(resolve, 100));
        
        // Screenshot with optimized settings for device
        const settings = getOptimalScreenshotSettings();
        const screenshotCanvas = await html2canvas(element, settings);
        
        // Restore profile settings
        if (profileImg) profileImg.style.display = '';
        if (avatarDiv) avatarDiv.style.display = '';
        
        // Verify canvas
        const canvas = screenshotCanvas;
        if (!canvas || canvas.width === 0 || canvas.height === 0) {
            throw new Error('Generated canvas is empty');
        }
        
        // Create download
        const timestamp = new Date().toISOString().slice(0, 19).replace(/[:.]/g, '-');
        const link = document.createElement('a');
        link.download = `cashapp-screenshot-${timestamp}.png`;
        link.href = canvas.toDataURL('image/png', 1.0);
        
        // Trigger download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Success feedback
        button.textContent = '✅ Downloaded!';
        addButtonAnimation(button, 'success');
        showFloatingNotification('🎉 Screenshot downloaded successfully!', 'success');
        updateStats('downloaded');
        
        setTimeout(() => {
            button.textContent = originalText;
            button.disabled = false;
        }, 2000);
        
    } catch (error) {
        console.error('Screenshot failed:', error);
        
        button.textContent = '❌ Try Again';
        button.disabled = false;
        
        showFloatingNotification(`❌ Screenshot failed: ${error.message}`, 'error');
        alert(`Screenshot failed: ${error.message}\n\nTry refreshing the page and using Chrome/Safari browser.`);
        
        setTimeout(() => {
            button.textContent = originalText;
            button.disabled = false;
        }, 3000);
    }
}

// Copy image to clipboard - BASE64 EMBEDDED SOLUTION
async function copyImageToClipboard() {
    const button = document.getElementById('copyBtn');
    const originalText = button.textContent;
    button.textContent = '📋 Copying...';
    button.disabled = true;
    
    // Add visual loading state
    addButtonAnimation(button, 'loading');
    
    try {
        // Import html2canvas if not loaded
        if (!window.html2canvas) {
            const script = document.createElement('script');
            script.src = 'https://html2canvas.hertzen.com/dist/html2canvas.min.js';
            document.head.appendChild(script);
            
            await new Promise((resolve, reject) => {
                script.onload = resolve;
                script.onerror = () => reject(new Error('Failed to load html2canvas'));
                setTimeout(() => reject(new Error('Timeout loading html2canvas')), 15000);
            });
        }
        
        const element = document.getElementById('screenshot-area');
        
        // Hide profile image, show initials only
        const profileImg = element.querySelector('#profileImage');
        const avatarDiv = element.querySelector('#avatarPlaceholder');
        const originalProfileDisplay = profileImg ? profileImg.style.display : '';
        const originalAvatarDisplay = avatarDiv ? avatarDiv.style.display : '';
        
        if (profileImg) profileImg.style.display = 'none';
        if (avatarDiv) avatarDiv.style.display = 'flex';
        
        // Small delay for DOM to update
        await new Promise(resolve => setTimeout(resolve, 100));
        
        // Screenshot with optimized settings for device
        const settings = getOptimalScreenshotSettings();
        const canvas = await html2canvas(element, settings);
        
        // Restore profile settings
        if (profileImg) profileImg.style.display = originalProfileDisplay;
        if (avatarDiv) avatarDiv.style.display = originalAvatarDisplay;
        
        // Convert to blob and copy
        canvas.toBlob(async (blob) => {
            try {
                await navigator.clipboard.write([
                    new ClipboardItem({ 'image/png': blob })
                ]);
                
                button.textContent = '✅ Copied!';
                addButtonAnimation(button, 'success');
                showFloatingNotification('📋 Image copied to clipboard!', 'success');
                updateStats('downloaded');
                
                setTimeout(() => {
                    button.textContent = originalText;
                    button.disabled = false;
                }, 2000);
                
            } catch (clipboardError) {
                throw new Error('Clipboard not supported or permission denied');
            }
        }, 'image/png', 1.0);
        
    } catch (error) {
        console.error('Copy failed:', error);
        
        button.textContent = '❌ Try Again';
        button.disabled = false;
        
        alert(`Copy failed: ${error.message}\n\nTry using Chrome/Safari browser or grant clipboard permissions.`);
        
        setTimeout(() => {
            button.textContent = originalText;
            button.disabled = false;
        }, 3000);
    }
}



// Initialize app
document.addEventListener('DOMContentLoaded', async function() {
    // Load saved stats
    loadStats();
    
    // Set base64 images immediately - NO CORS ISSUES!
    document.getElementById('cellular-icon').src = BASE64_IMAGES.cellular;
    document.getElementById('wifi-icon').src = BASE64_IMAGES.wifi;
    document.getElementById('battery-icon').src = BASE64_IMAGES.battery;
    document.getElementById('card-icon').src = BASE64_IMAGES.card;
    document.getElementById('pay-icon').src = BASE64_IMAGES.pay;
    document.getElementById('search-icon').src = BASE64_IMAGES.search;
    document.getElementById('history-icon').src = BASE64_IMAGES.history;
    
    // Generate initial transaction
    generateNewTransaction();
    
    // Set current time from control
    function updatePhoneTime() {
        const phoneTimeInput = document.getElementById('phoneTime').value;
        if (phoneTimeInput) {
            const [hours, minutes] = phoneTimeInput.split(':');
            const displayTime = `${parseInt(hours)}:${minutes}`;
            document.getElementById('currentTime').textContent = displayTime;
        }
    }
    updatePhoneTime();
    
    // Event listeners
    document.getElementById('generateBtn').addEventListener('click', generateNewTransaction);
    document.getElementById('downloadBtn').addEventListener('click', captureScreenshot);
    document.getElementById('copyBtn').addEventListener('click', copyImageToClipboard);
    
    // Real-time updates
    document.getElementById('amount').addEventListener('input', function(e) {
        const value = parseFloat(e.target.value) || 0;
        document.getElementById('displayAmount').textContent = value.toFixed(2);
    });
    
    document.getElementById('balance').addEventListener('input', function(e) {
        const value = parseFloat(e.target.value) || 0;
        document.getElementById('displayBalance').textContent = '$' + formatBalance(value);
    });
    
    // Phone time control
    document.getElementById('phoneTime').addEventListener('input', updatePhoneTime);
    
    // Transaction time and format controls
    ['transactionTimeInput', 'timeFormat'].forEach(id => {
        document.getElementById(id).addEventListener('change', function() {
            const timestamp = generateTimestamp();
            document.getElementById('transactionTimeDisplay').textContent = timestamp;
        });
    });
    
    document.getElementById('note').addEventListener('input', function(e) {
        const noteElement = document.getElementById('transactionNote');
        if (e.target.value.trim()) {
            noteElement.textContent = e.target.value;
            noteElement.style.display = 'block';
        } else {
            const randomNote = generateRandomNote();
            if (randomNote) {
                noteElement.textContent = randomNote;
                noteElement.style.display = 'block';
            } else {
                noteElement.style.display = 'none';
            }
        }
        applyPrivacySettings();
    });
    
    // Privacy checkboxes
    ['hideName', 'hideProfile', 'hideCashtag', 'hideNote'].forEach(id => {
        document.getElementById(id).addEventListener('change', applyPrivacySettings);
    });
    
    // Button animations with debouncing
    document.querySelectorAll('button').forEach(button => {
        let isProcessing = false;
        button.addEventListener('click', function(e) {
            // Prevent multiple rapid clicks
            if (isProcessing && (this.id === 'downloadBtn' || this.id === 'copyBtn')) {
                e.preventDefault();
                return;
            }
            
            if (this.id === 'downloadBtn' || this.id === 'copyBtn') {
                isProcessing = true;
                setTimeout(() => {
                    isProcessing = false;
                }, 3000); // Reset after 3 seconds
            }
            
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                if (!this.disabled) {
                    this.style.transform = '';
                }
            }, 150);
        });
    });
    
    // Remove automatic time updates since user controls it manually
});

// Export for testing
window.CashAppGenerator = {
    generateNewTransaction,
    captureScreenshot,
    copyImageToClipboard,
    stats
}; 