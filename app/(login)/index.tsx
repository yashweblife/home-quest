import { AuthContext } from '@/context/auth';
import React, { useContext, useState } from 'react';
import { View } from 'react-native';
import { Button, Card, TextInput } from 'react-native-paper';

function LoginBox({ login, setLoginVSSignup }: { login: (email:string, password:string) => void, setLoginVSSignup: (val:boolean)=>void }) {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    return (
        <Card style={{ width: "100%" }}>
            <Card.Title title="Login" />
            <Card.Content>
                <TextInput onChangeText={(val) => setLoginEmail(val)} value={loginEmail} label="Email" mode="outlined" />
                <TextInput onChangeText={(val) => setLoginPassword(val)} value={loginPassword} label="Password" mode="outlined" />
            </Card.Content>
            <Card.Actions>
                <Button onPress={() => setLoginVSSignup(false)}>Create An Account</Button>
                <Button onPress={() => {
                    login(loginEmail, loginPassword)
                }}>Submit</Button>
            </Card.Actions>
        </Card>
    )
}

function Signupbox({ signup, setLoginVSSignup }: { signup: (email:string, password:string, passwordConfirm:string, name:string) => void, setLoginVSSignup: (val:boolean)=>void }) {
    const [signupEmail, setSignupEmail] = useState("");
    const [signupPassword, setSignupPassword] = useState("");
    const [signupConfirm, setSignupConfirm] = useState("");
    const [signupName, setSignupName] = useState("");

    return (
        <Card style={{ width: "100%" }}>
            <Card.Title title="Create An Account" />
            <Card.Content>
                <TextInput onChangeText={(val)=>setSignupEmail(val)} value={signupEmail} label="Email" mode="outlined" />
                <TextInput onChangeText={(val)=>setSignupPassword(val)} value={signupPassword} label="Password" mode="outlined" />
                <TextInput onChangeText={(val)=>setSignupConfirm(val)} value={signupConfirm} label="Confirm Password" mode="outlined" />
                <TextInput onChangeText={(val)=>setSignupName(val)} value={signupName} label="Name" mode="outlined" />
            </Card.Content>
            <Card.Actions>
                <Button onPress={() => setLoginVSSignup(true)}>Login Instead</Button>
                <Button onPress={() => {
                    signup(signupEmail, signupPassword, signupConfirm, signupName)
                }}>Submit</Button>
            </Card.Actions>
        </Card>
    )
}

export default function LoginScreen() {
    const { login, signup } = useContext(AuthContext);
    const [loginVSSignup, setLoginVSSignup] = useState(true);
    return (
        <View
            style={{
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 16
            }}
        >
            {
                loginVSSignup ?
                    <LoginBox login={login} setLoginVSSignup={setLoginVSSignup} />
                    : <Signupbox signup={signup} setLoginVSSignup={setLoginVSSignup} />
            }
        </View>
    );
}