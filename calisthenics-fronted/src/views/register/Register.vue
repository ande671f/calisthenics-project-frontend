<template>
<div class="row">
    <div>
        <input type="text" placeholder="Email..."  v-model="email" required>
    </div>
    <div>
        <input type="text" placeholder="Adgangskode..." v-model="password" required>
    </div>
    <div>
        <button @click="Register">
            Register
        </button>
    </div>
</div>
    
</template>


<script src="./Register.ts"></script>