import React, { Component } from "react";
import { Link } from "react-router-dom";
import { signin, signInWithGoogle } from "../services/Auth";

export default class UserRegisterForm extends Component {
    constructor() {
        super();
        this.state = {
            error: null,
            email: "",
            password: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.googleSignIn = this.googleSignIn.bind(this);
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    async handleSubmit(event) {
        event.preventDefault();
        this.setState({ error: "" });
        try {
            await signin(this.state.email, this.state.password);
        } catch (error) {
            this.setState({ error: error.message });
        }
    }

    async googleSignIn() {
        try {
            await signInWithGoogle();
        } catch (error) {
            this.setState({ error: error.message });
        }
    }

    render() {
        return (
            <div className="container">
                <form
                    className="mt-5 py-5 px-5"
                    autoComplete="off"
                    onSubmit={this.handleSubmit}>
                    <p className="lead">
                        Ingresa tus datos
                    </p>
                    <div className="form-group">
                        <div className="row g-3 align-items-center">
                            <div className="col-auto">
                                <label htmlFor="inputPassword6" className="col-form-label"></label>
                            </div>
                            <div className="col-auto">
                                <input
                                    className="form-control"
                                    placeholder="Email"
                                    name="email"
                                    type="email"
                                    onChange={this.handleChange}
                                    value={this.state.email} />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="row g-3 align-items-center">
                            <div className="col-auto">
                                <label htmlFor="inputPassword6" className="col-form-label"></label>
                            </div>
                            <div className="col-auto">
                                <input
                                    className="form-control"
                                    placeholder="Password"
                                    name="password"
                                    onChange={this.handleChange}
                                    value={this.state.password}
                                    type="password" />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        {this.state.error ? (
                            <p className="text-danger">{this.state.error}</p>
                        ) : null}
                        <button className="btn btn-dark button" type="submit">
                            Login
                        </button>
                    </div>
                    <br />
                    <p>Registrarse con </p>
                    <button className="btn btn-dark button" type="button" onClick={this.googleSignIn}>
                        Google
                    </button>
                    <hr />
                    <p>
                        ¿Ya estás registrado?
                        Ingrese acá
                        <br />
                        <Link to="/Login" className="btn btn-dark button">
                            Ingresar
                        </Link>
                    </p>
                </form>
            </div>
        );
    }
}