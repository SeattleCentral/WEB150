/* global window document alert console */

var Monster = function(eyes, legs, arms, color) {
    var errors = [];
    try {
        this.setEyes(eyes);
    } catch(e) {
        errors.push(e.message);
    }
    try {
        this.setLegs(legs);
    } catch(e) {
        errors.push(e.message);
    }
    try {
        this.setArms(arms);
    } catch(e) {
        errors.push(e.message);
    }
    try {
        this.setColor(color);
    } catch(e) {
        errors.push(e.message);
    }
    if (errors.length > 0) {
        throw new Error(errors.join('<br>'));
    }
};

Monster.prototype.setEyes = function(eyes) {
    eyes = parseInt(eyes);
    if (eyes < 1) {
        throw new Error('No good! Need more eyes.');
    } else if (eyes > 20) {
        throw new Error('Oh no! Too many eyes.');
    } else {
        this.eyes = eyes;
    }
};

Monster.prototype.setLegs = function(legs) {
    legs = parseInt(legs);
    if (legs < 0) {
        throw new Error('You cannot have negative legs.');
    } else if (legs > 100) {
        throw new Error('Our monster factory can\'t handle more than 100 legs.');
    } else {
        this.legs = legs;
    }
};

Monster.prototype.setArms = function(arms) {
    arms = parseInt(arms);
    if (arms < 2) {
        throw new Error('You must have at least 2 arms.');
    } else if (arms > 8) {
        throw new Error('No more than arachnid arms.');
    } else {
        this.arms = arms;
    }
};

Monster.prototype.setColor = function(color) {
    if (/^#([0-9a-fA-F]{3}){1,2}$/.test(color)) {
        this.color = color;
    } else {
        throw new Error('Not a valid hex color!');
    }
};

Monster.prototype.description = function() {
    var description = `
        <p>
            A ${this.eyes}-eyed,
            <span class="colorBlock" style="background-color: ${this.color}">
                &nbsp;    
            </span>
            haired monster that ${this.getMovementText()}
            and attacks with ${this.arms} arms.
        </p>`;
    return description;
};

Monster.prototype.getMovementText = function() {
    if (this.legs > 1) {
        return `walks on ${this.legs} legs`;
    } else if (this.legs === 1) {
        return 'hops on one leg';
    } else {
        return 'slithers';
    }
};


window.onload = function() {
    var errorMessage = document.getElementById('errorMessage'),
        eyesInput = document.getElementById('eyes'),
        legsInput = document.getElementById('legs'),
        armsInput = document.getElementById('arms'),
        colorInput = document.getElementById('color'),
        output = document.getElementById('output'),
        submitButton = document.getElementById('submit');
    
    submitButton.addEventListener('click', function(event) {
        errorMessage.innerHTML = '';
        
        var eyes = eyesInput.value,
            legs = legsInput.value,
            arms = armsInput.value,
            color = colorInput.value;
        
        try {
            var monster = new Monster(eyes, legs, arms, color);
            output.innerHTML = monster.description();
        } catch (e) {
            errorMessage.innerHTML = e.message;
        }
        
    }, false);
};